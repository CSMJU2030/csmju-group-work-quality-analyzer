"use client";
import {
  Users,
  ClipboardList,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

import { getProjects } from "../../api/projects";
import { getMembers } from "../../api/members";
import { getTasks } from "../../api/tasks";
function Dashboard() {
  // =========================
  // State
  // =========================
  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  // =========================
  // Load Dashboard Data
  // =========================
  useEffect(() => {
    loadDashboardData();
  }, []);

  async function loadDashboardData() {
    try {
      setLoading(true);

      const [projectsData, membersData, tasksData] =
        await Promise.all([
          getProjects(),
          getMembers(),
          getTasks(),
        ]);

      setProjects(projectsData);
      setMembers(membersData);
      setTasks(tasksData);
    } catch (error) {
      console.error(
        "ไม่สามารถโหลดข้อมูลแดชบอร์ดได้:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // Task Statistics
  // =========================
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

  // =========================
  // Project Progress
  // =========================
  const projectProgress = useMemo(() => {
    if (totalTasks === 0) {
      return 0;
    }

    return Math.round(
      (completedTasks / totalTasks) * 100
    );
  }, [totalTasks, completedTasks]);

  // =========================
  // Contribution
  // Temporary calculation
  // Based on assigned task hours
  // =========================
  const memberContributions = useMemo(() => {
    if (members.length === 0) {
      return [];
    }

    const memberHours = members.map((member) => {
      const totalHours = tasks
        .filter(
          (task) => task.memberId === member.id
        )
        .reduce(
          (sum, task) => sum + Number(task.hours || 0),
          0
        );

      return {
        id: member.id,
        name: member.name,
        role: member.role || "สมาชิกทีม",
        hours: totalHours,
      };
    });

    const totalHours = memberHours.reduce(
      (sum, member) => sum + member.hours,
      0
    );

    return memberHours.map((member) => ({
      ...member,
      contribution:
        totalHours > 0
          ? Math.round(
              (member.hours / totalHours) * 100
            )
          : 0,
    }));
  }, [members, tasks]);

  // =========================
  // Team Balance
  // =========================
  const highestContributor = useMemo(() => {
    if (memberContributions.length === 0) {
      return null;
    }

    return [...memberContributions].sort(
      (a, b) => b.contribution - a.contribution
    )[0];
  }, [memberContributions]);

  const lowestContributor = useMemo(() => {
    if (memberContributions.length === 0) {
      return null;
    }

    return [...memberContributions].sort(
      (a, b) => a.contribution - b.contribution
    )[0];
  }, [memberContributions]);

  const contributionDifference =
    highestContributor && lowestContributor
      ? highestContributor.contribution -
        lowestContributor.contribution
      : 0;

  const isUnbalanced = contributionDifference >= 20;

  // =========================
  // Recent Activities
  // =========================
  const activities = useMemo(() => {
    const activityList = [];

    tasks.forEach((task) => {
      const member = members.find(
        (item) => item.id === task.memberId
      );

      if (!member) return;

      let action = `กำลังทำงาน "${task.title}"`;

      if (task.status === "COMPLETED") {
        action = `ทำงาน "${task.title}" เสร็จแล้ว`;
      } else if (task.status === "IN_PROGRESS") {
        action = `กำลังทำงาน "${task.title}"`;
      } else if (task.status === "PENDING") {
        action = `เพิ่มงาน "${task.title}"`;
      }

      activityList.push({
        id: task.id,
        member: member.name,
        action,
        timestamp: task.updatedAt || task.createdAt,
      });
    });

    return activityList
      .sort((a, b) => {
        return (
          new Date(b.timestamp || 0) -
          new Date(a.timestamp || 0)
        );
      })
      .slice(0, 4);
  }, [tasks, members]);

  // =========================
  // Format Activity Time
  // =========================
  const formatActivityTime = (timestamp) => {
    if (!timestamp) {
      return "ล่าสุด";
    }

    const date = new Date(timestamp);

    if (Number.isNaN(date.getTime())) {
      return "ล่าสุด";
    }

    const now = new Date();

    const diffMs = now - date;
    const diffMinutes = Math.floor(
      diffMs / (1000 * 60)
    );

    if (diffMinutes < 1) {
      return "เมื่อสักครู่นี้";
    }

    if (diffMinutes < 60) {
      return `${diffMinutes} นาทีที่แล้ว`;
    }

    const diffHours = Math.floor(
      diffMinutes / 60
    );

    if (diffHours < 24) {
      return `${diffHours} ชั่วโมงที่แล้ว`;
    }

    const diffDays = Math.floor(
      diffHours / 24
    );

    return `${diffDays} วันที่แล้ว`;
  };

  // =========================
  // Render
  // =========================
  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          แดชบอร์ด
        </h2>

        <p className="mt-1 text-slate-500">
          ภาพรวมการทำงานและการมีส่วนร่วมของทีม
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
          กำลังโหลดข้อมูลแดชบอร์ด...
        </div>
      )}

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="สมาชิกทีม"
          value={members.length}
          icon={<Users size={22} />}
          description="สมาชิกที่ใช้งานอยู่"
        />

        <StatCard
          title="งานทั้งหมด"
          value={totalTasks}
          icon={<ClipboardList size={22} />}
          description={`${projects.length} โครงการ`}
        />

        <StatCard
          title="งานที่เสร็จแล้ว"
          value={completedTasks}
          icon={<CheckCircle2 size={22} />}
          description={
            totalTasks > 0
              ? `${projectProgress}% ของงานทั้งหมด`
              : "0% ของงานทั้งหมด"
          }
        />

        <StatCard
          title="ความคืบหน้าโครงการ"
          value={`${projectProgress}%`}
          icon={<TrendingUp size={22} />}
          description={`${inProgressTasks} งานกำลังดำเนินการ`}
        />
      </div>

      {/* Project Progress */}
      <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              ความคืบหน้าโครงการ
            </h3>

            <p className="text-sm text-slate-500">
              ความคืบหน้าของโครงการในปัจจุบัน
            </p>
          </div>

          <span className="text-2xl font-bold">
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

        <div className="mt-4 flex justify-between text-sm text-slate-500">
          <span>
            เสร็จแล้ว {completedTasks} งาน
          </span>

          <span>
            ทั้งหมด {totalTasks} งาน
          </span>
        </div>
      </section>

      {/* Contribution + Team Balance */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Contribution */}
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                การมีส่วนร่วม
              </h3>

              <p className="text-sm text-slate-500">
                การมีส่วนร่วมจากชั่วโมงงานที่ได้รับมอบหมาย
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-medium text-slate-600">
              ดูรายละเอียด
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="space-y-5">
            {memberContributions.length > 0 ? (
              memberContributions.map((member) => (
                <div key={member.id}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                        {getMemberInitial(member.name)}
                      </div>

                      <div>
                        <p className="font-medium">
                          {member.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <span className="font-semibold">
                      {member.contribution}%
                    </span>
                  </div>

                  <div className="h-2.5 rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-slate-900 transition-all"
                      style={{
                        width: `${member.contribution}%`,
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">
                ไม่มีข้อมูลการมีส่วนร่วม
              </p>
            )}
          </div>
        </section>

        {/* Balance */}
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              ความสมดุลของทีม
            </h3>

            <p className="text-sm text-slate-500">
              วิเคราะห์การกระจายภาระงานของทีม
            </p>
          </div>

          {highestContributor &&
          lowestContributor &&
          isUnbalanced ? (
            <div className="flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
                <AlertTriangle size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-amber-900">
                  พบความแตกต่างของการมีส่วนร่วม
                </h4>

                <p className="mt-1 text-sm leading-6 text-amber-800">
                  มีความแตกต่าง{" "}
                  {contributionDifference}%{" "}
                  ระหว่างสมาชิกที่มีค่าการมีส่วนร่วมสูงสุดและต่ำสุด
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="rounded-lg bg-slate-200 p-2 text-slate-700">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  ไม่พบความแตกต่างในระดับสูง
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  การกระจายชั่วโมงงานในปัจจุบัน
                  ไม่พบความแตกต่างในระดับสูงระหว่างสมาชิกในทีม
                </p>
              </div>
            </div>
          )}

          <div className="mt-5 space-y-4">
            <BalanceItem
              label="การมีส่วนร่วมสูงสุด"
              value={
                highestContributor
                  ? `${highestContributor.name} — ${highestContributor.contribution}%`
                  : "-"
              }
            />

            <BalanceItem
              label="การมีส่วนร่วมต่ำสุด"
              value={
                lowestContributor
                  ? `${lowestContributor.name} — ${lowestContributor.contribution}%`
                  : "-"
              }
            />

            <BalanceItem
              label="ความแตกต่างของการมีส่วนร่วม"
              value={`${contributionDifference}%`}
            />
          </div>
        </section>
      </div>

      {/* Recent Activity */}
      <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            กิจกรรมล่าสุด
          </h3>

          <p className="text-sm text-slate-500">
            กิจกรรมล่าสุดของสมาชิกในทีม
          </p>
        </div>

        <div className="space-y-5">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <Clock size={18} />
                </div>

                <div>
                  <p className="text-sm">
                    <span className="font-semibold">
                      {activity.member}
                    </span>{" "}
                    {activity.action}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {formatActivityTime(
                      activity.timestamp
                    )}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              ไม่มีกิจกรรมล่าสุด
            </p>
          )}
        </div>
      </section>
    </>
  );
}

// =========================
// Components
// =========================

function StatCard({
  title,
  value,
  icon,
  description,
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-4 w-fit rounded-lg bg-slate-100 p-2">
        {icon}
      </div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
}

function BalanceItem({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b pb-3 last:border-0">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="text-sm font-semibold">
        {value}
      </span>
    </div>
  );
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

export default Dashboard;

