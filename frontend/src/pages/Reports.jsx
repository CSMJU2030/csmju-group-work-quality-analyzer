import {
  FileBarChart,
  CheckCircle2,
  Clock3,
  Users,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";

function Reports() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");

  // -----------------------------
  // Load projects
  // -----------------------------

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await apiRequest("/projects");

        const projectList = Array.isArray(data) ? data : [];

        setProjects(projectList);

        if (projectList.length > 0) {
          setSelectedProjectId(projectList[0].id);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load projects:", error);
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // -----------------------------
  // Load report
  // -----------------------------

  useEffect(() => {
    if (!selectedProjectId) return;

    let cancelled = false;

    async function loadReport() {
      try {
        setLoading(true);

        const data = await apiRequest(
          `/reports/summary/${selectedProjectId}`
        );

        if (!cancelled) {
          setReport(data);
        }
      } catch (error) {
        console.error("Failed to load report data:", error);

        if (!cancelled) {
          setReport(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadReport();

    return () => {
      cancelled = true;
    };
  }, [selectedProjectId]);

  // -----------------------------
  // Loading
  // -----------------------------

  if (loading && !report) {
    return (
      <div className="rounded-xl border bg-white p-6 text-sm text-slate-500">
        กำลังโหลดรายงาน...
      </div>
    );
  }

  // -----------------------------
  // Empty
  // -----------------------------

  if (!report) {
    return (
      <div className="rounded-xl border bg-white p-6 text-sm text-slate-500">
        ไม่มีข้อมูลรายงาน
      </div>
    );
  }

  // -----------------------------
  // Safe Report Data
  // -----------------------------

  const summary = report.summary ?? {};

  const contributions = Array.isArray(report.contributions)
    ? report.contributions
    : [];

  const workload = report.workload ?? {
    team: {
      totalTasks: 0,
      totalWorkHours: 0,
      averageProgress: 0,
    },
    teamBalance: {
      highestWorkload: 0,
      lowestWorkload: 0,
      workloadDifference: 0,
      balanceStatus: "BALANCED",
    },
    members: [],
  };

  const peerEvaluations = report.peerEvaluations ?? {
    team: {
      averagePercentage: 0,
    },
    members: [],
  };

  const workloadMembers = Array.isArray(workload.members)
    ? workload.members
    : [];

  const peerEvaluationMembers = Array.isArray(
    peerEvaluations.members
  )
    ? peerEvaluations.members
    : [];

  // -----------------------------
  // Member Name Helper
  // -----------------------------

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  const projectMembers = Array.isArray(selectedProject?.members)
    ? selectedProject.members
    : [];

  function getMemberName(memberId, ...fallbackNames) {
    const fromProject = projectMembers.find(
      (member) => member.id === memberId
    )?.name;

    return (
      fromProject ??
      fallbackNames.find(Boolean) ??
      "สมาชิกไม่ทราบชื่อ"
    );
  }

  // -----------------------------
  // Summary
  // -----------------------------

  const totalTasks = Number(
    summary.totalTasks ?? workload.team?.totalTasks
  ) || 0;

  const totalHours = Number(
    summary.totalWorkHours ?? workload.team?.totalWorkHours
  ) || 0;

  const completedTasks = contributions.reduce(
    (sum, member) =>
      sum + (Number(member.completedTasks) || 0),
    0
  );

  // -----------------------------
  // Project Progress (ค่าจาก backend)
  // -----------------------------

  const projectProgress =
    Math.round(Number(workload.team?.averageProgress)) || 0;

  // -----------------------------
  // Average Contribution
  // -----------------------------

  let averageContribution = 0;

  if (contributions.length > 0) {
    const totalContribution = contributions.reduce(
      (sum, member) =>
        sum + (Number(member.contributionScore) || 0),
      0
    );

    averageContribution = Math.round(
      totalContribution / contributions.length
    );
  }

  // -----------------------------
  // Team Balance
  // -----------------------------

  const teamBalance = workload.teamBalance ?? {
    highestWorkload: 0,
    lowestWorkload: 0,
    workloadDifference: 0,
    balanceStatus: "BALANCED",
  };

  const highestWorkload =
    Number(teamBalance.highestWorkload) || 0;

  const lowestWorkload =
    Number(teamBalance.lowestWorkload) || 0;

  const workloadDifference =
    Number(teamBalance.workloadDifference) || 0;

  const balanceStatus =
    teamBalance.balanceStatus ?? "BALANCED";

  // -----------------------------
  // Member Report
  // -----------------------------

  const memberReport = contributions.map(
    (contribution, index) => {
      const workloadMember = workloadMembers.find(
        (member) =>
          member.memberId === contribution.memberId
      );

      const peerMember = peerEvaluationMembers.find(
        (member) =>
          member.memberId === contribution.memberId
      );

      const scores = contribution.scores ?? {};

      return {
        id:
          contribution.memberId ??
          `member-${index}`,

        name: getMemberName(
          contribution.memberId,
          contribution.memberName,
          contribution.name,
          contribution.member?.name
        ),

        contribution:
          Number(contribution.contributionScore) || 0,

        completedTasks:
          Number(contribution.completedTasks) || 0,

        totalTasks:
          Number(contribution.totalTasks) || 0,

        hours:
          Number(contribution.totalWorkHours) || 0,

        progress:
          Number(
            workloadMember?.averageProgress ??
              scores.progress
          ) || 0,

        workload:
          Number(
            workloadMember?.workloadPercentage
          ) || 0,

        workloadLevel:
          workloadMember?.workloadLevel ??
          "NORMAL",

        scores: {
          taskCompletion:
            Number(scores.taskCompletion) || 0,

          taskImportance:
            Number(scores.taskImportance) || 0,

          workHours:
            Number(scores.workHours) || 0,

          progress:
            Number(scores.progress) || 0,

          peerEvaluation:
            Number(scores.peerEvaluation) || 0,
        },

        peerEvaluation:
          Number(peerMember?.percentage) || 0,

        insight:
          peerMember?.insight ?? {
            strengths: [],
            areasToReview: [],
          },
      };
    }
  );

  return (
    <div>
      {/* Header */}

      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900">
                <FileBarChart
                  size={22}
                  className="text-white"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  รายงาน
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  สรุปข้อมูลโครงการและภาพรวมการทำงานของทีม
                </p>
              </div>
            </div>
          </div>

          {projects.length > 0 && (
            <div className="w-full lg:w-[420px]">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                เลือกโครงการ
              </label>

              <select
                value={selectedProjectId}
                onChange={(e) =>
                  setSelectedProjectId(e.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-200"
              >
                {projects.map((project, index) => {
                  const memberCount = Array.isArray(
                    project.members
                  )
                    ? project.members.length
                    : 0;

                  const taskCount = Array.isArray(
                    project.tasks
                  )
                    ? project.tasks.length
                    : 0;

                  return (
                    <option
                      key={`project-${project.id ?? index}`}
                      value={project.id}
                    >
                      {project.name} — {memberCount} สมาชิก ·{" "}
                      {taskCount} งาน
                    </option>
                  );
                })}
              </select>

              {loading && (
                <p className="mt-2 text-xs text-slate-400">
                  กำลังโหลดข้อมูล...
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Summary Cards */}

      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="ความคืบหน้าโครงการ"
          value={`${projectProgress}%`}
          icon={
            <TrendingUp
              size={22}
              className="text-slate-600"
            />
          }
        />

        <SummaryCard
          title="งานที่เสร็จแล้ว"
          value={`${completedTasks}/${totalTasks}`}
          icon={
            <CheckCircle2
              size={22}
              className="text-slate-600"
            />
          }
        />

        <SummaryCard
          title="ชั่วโมงการทำงาน"
          value={`${totalHours} ชั่วโมง`}
          icon={
            <Clock3
              size={22}
              className="text-slate-600"
            />
          }
        />

        <SummaryCard
          title="การมีส่วนร่วมเฉลี่ย"
          value={`${averageContribution}%`}
          icon={
            <Users
              size={22}
              className="text-slate-600"
            />
          }
        />
      </div>

      {/* Project Progress */}

      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              ความคืบหน้าโครงการ
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              ภาพรวมความสำเร็จของโครงการ
            </p>
          </div>

          <div className="rounded-xl bg-slate-100 px-4 py-2">
            <span className="text-xl font-bold text-slate-900">
              {projectProgress}%
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-3 rounded-full bg-slate-900 transition-all duration-500"
            style={{
              width: `${Math.min(projectProgress, 100)}%`,
            }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>ความสำเร็จของโครงการ</span>
          <span>เสร็จแล้ว {projectProgress}%</span>
        </div>
      </div>

      {/* Team Performance */}

      <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                ผลการทำงานของทีม
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                ภาพรวมการมีส่วนร่วมและภาระงานของสมาชิก
              </p>
            </div>

            <div className="hidden rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600 sm:block">
              {memberReport.length} สมาชิก
            </div>
          </div>
        </div>

        {memberReport.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <Users
              size={32}
              className="mx-auto text-slate-300"
            />

            <p className="mt-3 text-sm font-medium text-slate-600">
              ไม่มีข้อมูลทีม
            </p>

            <p className="mt-1 text-xs text-slate-400">
              เพิ่มสมาชิกในทีมเพื่อดูข้อมูลการทำงาน
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    สมาชิก
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    การมีส่วนร่วม
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                    งาน
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                    ชั่วโมง
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                    ความคืบหน้า
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {memberReport.map((member, index) => (
                  <tr
                    key={`member-report-${member.id}-${index}`}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                          {member.name
                            ?.charAt(0)
                            ?.toUpperCase()}
                        </div>

                        <div>
                          <p className="font-medium text-slate-900">
                            {member.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            สมาชิกทีม
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="min-w-[180px]">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-900">
                            {member.contribution}%
                          </span>

                          <span className="text-xs text-slate-400">
                            โดยรวม
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full bg-slate-900 transition-all duration-500"
                            style={{
                              width: `${Math.min(
                                member.contribution,
                                100
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-center">
                      <span className="inline-flex rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                        {member.completedTasks}/
                        {member.totalTasks}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-center">
                      <span className="text-sm font-semibold text-slate-700">
                        {member.hours} ชั่วโมง
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="mx-auto min-w-[120px] max-w-[160px]">
                        <div className="mb-2 text-center">
                          <span className="text-sm font-semibold text-slate-700">
                            {member.progress}%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full bg-slate-900 transition-all duration-500"
                            style={{
                              width: `${Math.min(
                                member.progress,
                                100
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Contribution Breakdown */}

      <div className="mb-8 rounded-xl border bg-white">
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-900">
            รายละเอียดการมีส่วนร่วม
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            คะแนนการมีส่วนร่วมโดยพิจารณาจากหลายปัจจัย
          </p>
        </div>

        {memberReport.length > 0 ? (
          <div className="divide-y">
            {memberReport.map((member, index) => (
              <div
                key={`contribution-${member.id}-${index}`}
                className="p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      การมีส่วนร่วมโดยรวม
                    </p>
                  </div>

                  <span className="text-2xl font-bold text-slate-900">
                    {member.contribution}%
                  </span>
                </div>

                <div className="space-y-4">
                  <ScoreBar
                    label="การทำงานที่เสร็จ"
                    score={member.scores.taskCompletion}
                    weight="25%"
                  />

                  <ScoreBar
                    label="ความสำคัญของงาน"
                    score={member.scores.taskImportance}
                    weight="25%"
                  />

                  <ScoreBar
                    label="ชั่วโมงการทำงาน"
                    score={member.scores.workHours}
                    weight="15%"
                  />

                  <ScoreBar
                    label="ความคืบหน้า"
                    score={member.scores.progress}
                    weight="20%"
                  />

                  <ScoreBar
                    label="การประเมินจากเพื่อน"
                    score={member.scores.peerEvaluation}
                    weight="15%"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-sm text-slate-500">
            ไม่มีข้อมูลการมีส่วนร่วม
          </div>
        )}
      </div>

      {/* Team Balance */}

      <div className="mb-8 rounded-xl border bg-white p-6">
        <div className="flex gap-4">
          <div className="rounded-lg bg-slate-100 p-2">
            <AlertTriangle
              size={22}
              className="text-slate-600"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-semibold text-slate-900">
              การวิเคราะห์ความสมดุลของทีม
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              การกระจายภาระงานพิจารณาจากจำนวนงาน
              ชั่วโมงของงาน และชั่วโมงการทำงาน
              ข้อมูลนี้สามารถใช้เพื่อตรวจสอบ
              การกระจายภาระงานภายในทีม
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">
              <InfoBox
                label="ภาระงานสูงสุด"
                value={`${highestWorkload} งาน`}
              />

              <InfoBox
                label="ภาระงานต่ำสุด"
                value={`${lowestWorkload} งาน`}
              />

              <InfoBox
                label="ความแตกต่าง"
                value={`${workloadDifference} งาน`}
              />

              <InfoBox
                label="สถานะ"
                value={getBalanceStatusLabel(balanceStatus)}
              />
            </div>

            <div className="mt-5 rounded-lg border bg-slate-50 p-4">
              {balanceStatus === "BALANCED" && (
                <p className="text-sm leading-6 text-slate-600">
                  ไม่พบความแตกต่างของภาระงาน
                  ในระดับสูงระหว่างสมาชิกในทีมปัจจุบัน
                </p>
              )}

              {balanceStatus === "SLIGHTLY_IMBALANCED" && (
                <p className="text-sm leading-6 text-slate-600">
                  พบความแตกต่างของภาระงาน
                  ทีมสามารถตรวจสอบการกระจายภาระงาน
                  เพื่อให้การแบ่งงานมีความสมดุลมากขึ้น
                </p>
              )}

              {balanceStatus === "IMBALANCED" && (
                <p className="text-sm leading-6 text-slate-600">
                  พบความแตกต่างของภาระงานในระดับสูง
                  ทีมสามารถตรวจสอบการกระจายงาน
                  และภาระงานของสมาชิกเพิ่มเติม
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Peer Evaluation */}

      <div className="rounded-xl border bg-white">
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-900">
            การประเมินจากเพื่อนร่วมทีม
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            ผลการประเมินจากสมาชิกภายในทีม
          </p>
        </div>

        {peerEvaluationMembers.length > 0 ? (
          <div className="divide-y">
            {peerEvaluationMembers.map((member, index) => {
              const hasEvaluation =
                Number(member.averageScore) > 0;

              return (
                <div
                  key={`peer-member-${member.memberId ?? index}-${index}`}
                  className="p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {getMemberName(
                          member.memberId,
                          member.memberName,
                          member.name,
                          member.member?.name
                        )}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {hasEvaluation
                          ? `คะแนนเฉลี่ย: ${member.averageScore}/5`
                          : "ยังไม่มีการประเมิน"}
                      </p>
                    </div>

                    <span className="text-xl font-bold text-slate-900">
                      {hasEvaluation
                        ? `${member.percentage}%`
                        : "-"}
                    </span>
                  </div>

                  {member.insight?.strengths?.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-slate-700">
                        จุดเด่น
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {member.insight.strengths.map(
                          (strength, strengthIndex) => (
                            <span
                              key={`strength-${member.memberId ?? index}-${strengthIndex}`}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                            >
                              {strength}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {member.insight?.areasToReview?.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-slate-700">
                        ประเด็นที่ควรทบทวน
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {member.insight.areasToReview.map(
                          (area, areaIndex) => (
                            <span
                              key={`review-${member.memberId ?? index}-${areaIndex}`}
                              className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700"
                            >
                              {area}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-6 text-sm text-slate-500">
            ไม่มีข้อมูลการประเมินจากเพื่อนร่วมทีม
          </div>
        )}
      </div>
    </div>
  );
}

// -----------------------------
// Balance Status
// -----------------------------

function getBalanceStatusLabel(status) {
  if (status === "BALANCED") {
    return "สมดุล";
  }

  if (status === "SLIGHTLY_IMBALANCED") {
    return "แตกต่างเล็กน้อย";
  }

  if (status === "IMBALANCED") {
    return "แตกต่าง";
  }

  return status;
}

// -----------------------------
// Score Bar
// -----------------------------

function ScoreBar({ label, score, weight }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700">
            {label}
          </span>

          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
            น้ำหนัก {weight}
          </span>
        </div>

        <span className="text-sm font-semibold text-slate-900">
          {score}%
        </span>
      </div>

      <div className="h-2 w-full rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-slate-900"
          style={{
            width: `${Math.min(score, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}

// -----------------------------
// Info Box
// -----------------------------

function InfoBox({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </span>

      <p className="mt-1 text-xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

// -----------------------------
// Summary Card
// -----------------------------

function SummaryCard({ title, value, icon }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition group-hover:bg-slate-200">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Reports;