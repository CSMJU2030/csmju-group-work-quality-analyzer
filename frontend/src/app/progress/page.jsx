"use client";

import {
  CheckCircle2,
  Clock3,
  ListTodo,
  TrendingUp,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

import { getTasks } from "../../api/tasks";
import { getMembers } from "../../api/members";
import { getProjects } from "../../api/projects";

function Progress() {
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadProgressData() {
    try {
      setLoading(true);

      const [tasksData, membersData, projectsData] =
        await Promise.all([
          getTasks(),
          getMembers(),
          getProjects(),
        ]);

      setTasks(tasksData);
      setMembers(membersData);
      setProjects(projectsData);
    } catch (error) {
      console.error(
        "Failed to load progress data:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

useEffect(() => {
  const load = async () => {
    await loadProgressData();
  };

  load();
}, []);

  /*
   * =========================
   * Task Summary
   * =========================
   */

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "COMPLETED"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "IN_PROGRESS"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "PENDING"
  ).length;

  const projectProgress = useMemo(() => {
    if (totalTasks === 0) {
      return 0;
    }

    return Math.round(
      (completedTasks / totalTasks) * 100
    );
  }, [totalTasks, completedTasks]);

  /*
   * =========================
   * Member Progress
   * =========================
   */

  const memberProgress = useMemo(() => {
    return members.map((member) => {
      const memberTasks = tasks.filter(
        (task) => task.memberId === member.id
      );

      const total = memberTasks.length;

      const completed = memberTasks.filter(
        (task) => task.status === "COMPLETED"
      ).length;

      const inProgress = memberTasks.filter(
        (task) => task.status === "IN_PROGRESS"
      ).length;

      const pending = memberTasks.filter(
        (task) => task.status === "PENDING"
      ).length;

      const percentage =
        total > 0
          ? Math.round((completed / total) * 100)
          : 0;

      return {
        id: member.id,
        name: member.name,
        role: member.role || "สมาชิกทีม",
        total,
        completed,
        inProgress,
        pending,
        percentage,
      };
    });
  }, [members, tasks]);

  /*
   * =========================
   * Project Stages
   * =========================
   *
   * Current database does not have a
   * separate ProjectStage table.
   *
   * Therefore stages are derived from
   * the actual task status data.
   */

  const projectStages = useMemo(() => {
    const developmentProgress = projectProgress;

    const testingProgress =
      totalTasks > 0
        ? Math.round(
            ((completedTasks + inProgressTasks * 0.5) /
              totalTasks) *
              100
          )
        : 0;

    return [
      {
        title: "การวางแผน",
        description:
          "วางแผนและกำหนดขอบเขตโปรเจกต์",
        progress: projects.length > 0 ? 100 : 0,
        status:
          projects.length > 0
            ? "Completed"
            : "Pending",
      },
      {
        title: "การออกแบบ",
        description:
          "ออกแบบระบบและหน้าตาเว็บไซต์",
        progress:
          totalTasks > 0
            ? Math.min(
                100,
                Math.round(
                  (completedTasks /
                    totalTasks) *
                    100
                )
              )
            : 0,
        status:
          completedTasks > 0
            ? "In Progress"
            : "Pending",
      },
      {
        title: "การพัฒนา",
        description:
          "พัฒนาระบบ Frontend และ Backend",
        progress: developmentProgress,
        status:
          developmentProgress === 100
            ? "Completed"
            : developmentProgress > 0
            ? "In Progress"
            : "Pending",
      },
      {
        title: "การทดสอบ",
        description:
          "ทดสอบและแก้ไขข้อผิดพลาด",
        progress: Math.min(
          100,
          testingProgress
        ),
        status:
          testingProgress === 100
            ? "Completed"
            : testingProgress > 0
            ? "In Progress"
            : "Pending",
      },
      {
        title: "รายงานฉบับสมบูรณ์",
        description:
          "จัดทำรายงานและเตรียมนำเสนอ",
        progress:
          projectProgress === 100 ? 100 : 0,
        status:
          projectProgress === 100
            ? "Completed"
            : "Pending",
      },
    ];
  }, [
    projects.length,
    totalTasks,
    completedTasks,
    inProgressTasks,
    projectProgress,
  ]);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          ความคืบหน้า
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          ติดตามความคืบหน้าของโครงการและสมาชิกในทีม
        </p>
      </div>

      {/* Loading */}

      {loading && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
          กำลังโหลดข้อมูลความคืบหน้า...
        </div>
      )}

      {/* Summary Cards */}

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        <SummaryCard
          title="งานทั้งหมด"
          value={totalTasks}
          icon={<ListTodo size={20} />}
          iconClass="text-slate-400"
        />

        <SummaryCard
          title="เสร็จแล้ว"
          value={completedTasks}
          icon={<CheckCircle2 size={20} />}
          iconClass="text-green-500"
        />

        <SummaryCard
          title="กำลังดำเนินการ"
          value={inProgressTasks}
          icon={<Clock3 size={20} />}
          iconClass="text-blue-500"
        />

        <SummaryCard
          title="รอดำเนินการ"
          value={pendingTasks}
          icon={<TrendingUp size={20} />}
          iconClass="text-orange-500"
        />
      </div>

      {/* Overall Project Progress */}

      <div className="mb-6 rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              ความคืบหน้าของโครงการโดยรวม
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              ความคืบหน้าของโปรเจกต์โดยรวม
            </p>
          </div>

          <span className="text-2xl font-bold text-slate-900">
            {projectProgress}%
          </span>
        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-slate-900 transition-all"
            style={{
              width: `${projectProgress}%`,
            }}
          />
        </div>

        <div className="mt-3 flex justify-between text-sm text-slate-500">
          <span>
            เสร็จแล้ว {completedTasks} จาก {totalTasks} งาน
          </span>

          <span>
            เหลืออีก {totalTasks - completedTasks} งาน
          </span>
        </div>
      </div>

      {/* Project Stages */}

      <div className="mb-6 rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-900">
            ขั้นตอนการดำเนินโครงการ
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            ภาพรวมความคืบหน้าในแต่ละขั้นตอนของโครงการ
          </p>
        </div>

        <div className="space-y-6">
          {projectStages.map((stage) => (
            <div key={stage.title}>
              <div className="mb-2 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {stage.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {stage.description}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">
                    {stage.progress}%
                  </p>

                  <p className="text-xs text-slate-500">
                    {getStageStatusLabel(stage.status)}
                  </p>
                </div>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full transition-all ${
                    stage.status === "Completed"
                      ? "bg-green-500"
                      : stage.status === "In Progress"
                      ? "bg-blue-500"
                      : "bg-slate-400"
                  }`}
                  style={{
                    width: `${stage.progress}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Progress */}

      <div className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-900">
            ความคืบหน้าของสมาชิก
          </h2>

          <p className="text-sm text-slate-500">
            ความคืบหน้าจากงานที่ได้รับมอบหมาย
          </p>
        </div>

        <div className="space-y-6">
          {memberProgress.length > 0 ? (
            memberProgress.map((member) => (
              <div key={member.id}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {getMemberInitial(member.name)}
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {member.name}
                      </h3>

                      <p className="text-xs text-slate-500">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">
                      {member.percentage}%
                    </p>

                    <p className="text-xs text-slate-500">
                      {member.completed}/
                      {member.total} งาน
                    </p>
                  </div>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-slate-900 transition-all"
                    style={{
                      width: `${member.percentage}%`,
                    }}
                  />
                </div>

                <div className="mt-2 flex gap-4 text-xs text-slate-500">
                  <span>
                    เสร็จแล้ว: {member.completed}
                  </span>

                  <span>
                    กำลังดำเนินการ: {member.inProgress}
                  </span>

                  <span>
                    รอดำเนินการ: {member.pending}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              ไม่มีข้อมูลความคืบหน้าของสมาชิก
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  icon,
  iconClass,
}) {
  return (
    <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <span className={iconClass}>
          {icon}
        </span>
      </div>

      <h2 className="mt-3 text-2xl font-bold text-slate-900">
        {value}
      </h2>
    </div>
  );
}

function getStageStatusLabel(status) {
  if (status === "Completed") {
    return "เสร็จแล้ว";
  }

  if (status === "In Progress") {
    return "กำลังดำเนินการ";
  }

  return "รอดำเนินการ";
}

function getMemberInitial(name) {
  if (!name) {
    return "?";
  }

  const words = name.trim().split(" ");

  if (words.length >= 2) {
    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  }

  return name.substring(0, 2).toUpperCase();
}

export default Progress;

