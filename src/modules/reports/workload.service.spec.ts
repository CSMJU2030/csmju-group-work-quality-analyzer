import { WorkloadService } from './workload.service.js';

type TestTask = {
  hours: number;
  progress: number;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
};

type TestMember = {
  id: string;
  name: string;
  tasks: TestTask[];
  workLogs: { hours: number }[];
};

function task(overrides: Partial<TestTask> = {}): TestTask {
  return { hours: 0, progress: 0, status: 'PENDING', ...overrides };
}

function member(id: string, overrides: Partial<TestMember> = {}): TestMember {
  return {
    id,
    name: `Member ${id}`,
    tasks: [],
    workLogs: [],
    ...overrides,
  };
}

function createService(members: TestMember[]) {
  const prisma = {
    member: {
      findMany: vi.fn().mockResolvedValue(members),
    },
  };

  return new WorkloadService(prisma as never);
}

describe('WorkloadService', () => {
  it('โครงการไม่มีสมาชิก คืนค่าเริ่มต้นและสถานะ BALANCED', async () => {
    const service = createService([]);

    const result = await service.analyzeProjectWorkload('p1');

    expect(result.members).toEqual([]);
    expect(result.team.totalMembers).toBe(0);
    expect(result.team.totalTasks).toBe(0);
    expect(result.teamBalance.balanceStatus).toBe('BALANCED');
  });

  it('ไม่มี WorkLog ให้ใช้ Task.hours เป็นชั่วโมงทำงาน', async () => {
    const service = createService([
      member('a', { tasks: [task({ hours: 3 }), task({ hours: 2 })] }),
    ]);

    const result = await service.analyzeProjectWorkload('p1');

    expect(result.members[0].totalTaskHours).toBe(5);
    expect(result.members[0].totalWorkHours).toBe(5);
    expect(result.team.totalWorkHours).toBe(5);
  });

  it('มี WorkLog ให้ใช้ WorkLog เป็นชั่วโมงทำงาน', async () => {
    const service = createService([
      member('a', {
        tasks: [task({ hours: 10 })],
        workLogs: [{ hours: 1.5 }, { hours: 2 }],
      }),
    ]);

    const result = await service.analyzeProjectWorkload('p1');

    expect(result.members[0].totalTaskHours).toBe(10);
    expect(result.members[0].totalWorkHours).toBe(3.5);
  });

  it('ความคืบหน้าเฉลี่ย: COMPLETED=100, IN_PROGRESS=progress, PENDING=0', async () => {
    const service = createService([
      member('a', {
        tasks: [
          task({ status: 'COMPLETED', progress: 0 }),
          task({ status: 'IN_PROGRESS', progress: 40 }),
          task({ status: 'PENDING', progress: 90 }),
        ],
      }),
    ]);

    const result = await service.analyzeProjectWorkload('p1');

    // (100 + 40 + 0) / 3 = 46.67
    expect(result.members[0].averageProgress).toBe(46.67);
    expect(result.members[0].completedTasks).toBe(1);
  });

  it('ทีมที่งานเท่ากันทุกคน: workload 100% และสถานะ BALANCED', async () => {
    const tasks = () => [task({ hours: 4 }), task({ hours: 4 })];

    const service = createService([
      member('a', { tasks: tasks() }),
      member('b', { tasks: tasks() }),
    ]);

    const result = await service.analyzeProjectWorkload('p1');

    expect(result.members[0].workloadPercentage).toBe(100);
    expect(result.members[1].workloadPercentage).toBe(100);
    expect(result.members[0].workloadLevel).toBe('NORMAL');
    expect(result.teamBalance.workloadDifference).toBe(0);
    expect(result.teamBalance.balanceStatus).toBe('BALANCED');
  });

  it('ภาระงานต่างกันมาก: HIGH/LOW และสถานะ IMBALANCED', async () => {
    const service = createService([
      member('a', {
        tasks: [task({ hours: 10 }), task({ hours: 10 }), task({ hours: 10 })],
      }),
      member('b', { tasks: [task({ hours: 1 })] }),
    ]);

    const result = await service.analyzeProjectWorkload('p1');

    const a = result.members.find((m) => m.memberId === 'a')!;
    const b = result.members.find((m) => m.memberId === 'b')!;

    expect(a.workloadLevel).toBe('HIGH');
    expect(b.workloadLevel).toBe('LOW');
    expect(result.teamBalance.highestWorkload).toBe(a.workloadPercentage);
    expect(result.teamBalance.lowestWorkload).toBe(b.workloadPercentage);
    expect(result.teamBalance.workloadDifference).toBeGreaterThan(40);
    expect(result.teamBalance.balanceStatus).toBe('IMBALANCED');
  });

  it('ภาระงานต่างกันปานกลาง: สถานะ SLIGHTLY_IMBALANCED (ต่างเกิน 20 ไม่เกิน 40)', async () => {
    // a: 3 งาน 6 ชม. / b: 2 งาน 4 ชม.
    // ค่าเฉลี่ย 2.5 งาน, 5 ชม. -> a = 120%, b = 80% -> ต่างกัน 40 พอดี (ไม่เกิน 40)
    const service = createService([
      member('a', {
        tasks: [task({ hours: 2 }), task({ hours: 2 }), task({ hours: 2 })],
      }),
      member('b', { tasks: [task({ hours: 2 }), task({ hours: 2 })] }),
    ]);

    const result = await service.analyzeProjectWorkload('p1');

    expect(result.teamBalance.workloadDifference).toBe(40);
    expect(result.teamBalance.balanceStatus).toBe('SLIGHTLY_IMBALANCED');
  });
});