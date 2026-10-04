import { ContributionService } from './contribution.service.js';

type TestTask = {
  hours: number;
  progress: number;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
};

type TestMember = {
  id: string;
  name: string;
  projectId: string;
  tasks: TestTask[];
  workLogs: { hours: number }[];
  evaluationsReceived: {
    responsibility: number;
    communication: number;
    teamwork: number;
    quality: number;
  }[];
};

function task(overrides: Partial<TestTask> = {}): TestTask {
  return {
    hours: 0,
    progress: 0,
    status: 'PENDING',
    priority: 'MEDIUM',
    ...overrides,
  };
}

function member(overrides: Partial<TestMember> = {}): TestMember {
  return {
    id: 'm1',
    name: 'Member A',
    projectId: 'p1',
    tasks: [],
    workLogs: [],
    evaluationsReceived: [],
    ...overrides,
  };
}

// สร้าง service โดยให้ findUnique คืนสมาชิกที่ต้องการ
// และ findMany คืนสมาชิกทั้งโครงการ (ใช้เทียบชั่วโมง)
function createService(target: TestMember | null, team: TestMember[] = []) {
  const prisma = {
    member: {
      findUnique: vi.fn().mockResolvedValue(target),
      findMany: vi.fn().mockResolvedValue(team.length ? team : target ? [target] : []),
    },
  };

  const service = new ContributionService(prisma as never);

  return { service, prisma };
}

describe('ContributionService', () => {
  it('โยน error เมื่อไม่พบสมาชิก', async () => {
    const { service } = createService(null);

    await expect(
      service.calculateMemberContribution('missing'),
    ).rejects.toThrow('Member not found');
  });

  it('สมาชิกไม่มีงานเลย คะแนนทุกด้านเป็น 0', async () => {
    const { service } = createService(member());

    const result = await service.calculateMemberContribution('m1');

    expect(result.contributionScore).toBe(0);
    expect(result.totalTasks).toBe(0);
    expect(result.completedTasks).toBe(0);
    expect(result.totalWorkHours).toBe(0);
    expect(result.scores).toEqual({
      taskCompletion: 0,
      taskImportance: 0,
      workHours: 0,
      progress: 0,
      peerEvaluation: 0,
    });
  });

  it('ไม่มี WorkLog ให้ใช้ Task.hours เป็นชั่วโมงทำงาน', async () => {
    const m = member({
      tasks: [task({ hours: 3 }), task({ hours: 2.5 })],
    });
    const { service } = createService(m);

    const result = await service.calculateMemberContribution('m1');

    expect(result.totalWorkHours).toBe(5.5);
  });

  it('มี WorkLog ให้ใช้ WorkLog และไม่นับ Task.hours', async () => {
    const m = member({
      tasks: [task({ hours: 10 })],
      workLogs: [{ hours: 1 }, { hours: 2 }],
    });
    const { service } = createService(m);

    const result = await service.calculateMemberContribution('m1');

    expect(result.totalWorkHours).toBe(3);
  });

  it('งาน COMPLETED นับความคืบหน้าเป็น 100 แม้ progress เป็น 0', async () => {
    const m = member({
      tasks: [task({ status: 'COMPLETED', progress: 0 })],
    });
    const { service } = createService(m);

    const result = await service.calculateMemberContribution('m1');

    expect(result.scores.progress).toBe(100);
    expect(result.scores.taskCompletion).toBe(100);
    expect(result.completedTasks).toBe(1);
  });

  it('ความคืบหน้า: COMPLETED=100, IN_PROGRESS=ค่า progress, PENDING=0', async () => {
    const m = member({
      tasks: [
        task({ status: 'COMPLETED', progress: 0 }),
        task({ status: 'IN_PROGRESS', progress: 50 }),
        task({ status: 'PENDING', progress: 80 }),
      ],
    });
    const { service } = createService(m);

    const result = await service.calculateMemberContribution('m1');

    // (100 + 50 + 0) / 3 = 50
    expect(result.scores.progress).toBe(50);
  });

  it('คะแนนความสำคัญของงานคิดจาก priority', async () => {
    const m = member({
      tasks: [task({ priority: 'HIGH' }), task({ priority: 'LOW' })],
    });
    const { service } = createService(m);

    const result = await service.calculateMemberContribution('m1');

    // (3 + 1) / (2 * 3) = 66.67%
    expect(result.scores.taskImportance).toBe(66.67);
  });

  it('คะแนนชั่วโมงเทียบกับสมาชิกที่มีชั่วโมงสูงสุดในโครงการ', async () => {
    const a = member({
      id: 'a',
      tasks: [task({ hours: 4 })],
    });
    const b = member({
      id: 'b',
      tasks: [task({ hours: 8 })],
    });
    const { service } = createService(a, [a, b]);

    const result = await service.calculateMemberContribution('a');

    // 4 / 8 = 50%
    expect(result.scores.workHours).toBe(50);
  });

  it('คะแนนประเมินจากเพื่อนคิดจากคะแนนเต็ม 20 ต่อหนึ่งการประเมิน', async () => {
    const m = member({
      evaluationsReceived: [
        { responsibility: 5, communication: 5, teamwork: 5, quality: 5 },
        { responsibility: 3, communication: 3, teamwork: 3, quality: 3 },
      ],
    });
    const { service } = createService(m);

    const result = await service.calculateMemberContribution('m1');

    // (20 + 12) / 40 = 80%
    expect(result.scores.peerEvaluation).toBe(80);
  });

  it('คะแนนรวมถ่วงน้ำหนัก 25/25/15/20/15', async () => {
    // งานเดียว: COMPLETED, HIGH, 5 ชม., ประเมินเต็ม
    const m = member({
      tasks: [task({ status: 'COMPLETED', priority: 'HIGH', hours: 5 })],
      evaluationsReceived: [
        { responsibility: 5, communication: 5, teamwork: 5, quality: 5 },
      ],
    });
    const { service } = createService(m);

    const result = await service.calculateMemberContribution('m1');

    // ทุกด้านได้ 100 -> 100*(0.25+0.25+0.15+0.20+0.15) = 100
    expect(result.scores).toEqual({
      taskCompletion: 100,
      taskImportance: 100,
      workHours: 100,
      progress: 100,
      peerEvaluation: 100,
    });
    expect(result.contributionScore).toBe(100);
  });
});