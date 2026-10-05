import {
  Users,
  Clock3,
  CheckCircle2,
  Star,
  AlertTriangle,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

import { getMembers } from "../api/members";
import { getTasks } from "../api/tasks";
import { apiRequest } from "../api/client";

function Contribution() {
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [workLogs, setWorkLogs] = useState([]);
  const [evaluations, setEvaluations] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContributionData();
  }, []);

  async function loadContributionData() {
    try {
      setLoading(true);

      const [
        membersData,
        tasksData,
        workLogsData,
        evaluationsData,
      ] = await Promise.all([
        getMembers(),
        getTasks(),
        apiRequest("/work-logs"),
        apiRequest("/evaluations"),
      ]);

      setMembers(membersData);
      setTasks(tasksData);
      setWorkLogs(workLogsData);
      setEvaluations(evaluationsData);
    } catch (error) {
      console.error(
        "ไม่สามารถโหลดข้อมูลการมีส่วนร่วมได้:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  const memberData = useMemo(() => {
    return members
      .map((member) => {
        const memberTasks = tasks.filter(
          (task) => task.memberId === member.id
        );

        const memberWorkLogs = workLogs.filter(
          (log) => log.memberId === member.id
        );

        const memberEvaluations = evaluations.filter(
          (evaluation) =>
            evaluation.targetMemberId === member.id
        );

        const totalTasks = memberTasks.length;

        const completedTasks = memberTasks.filter(
          (task) => task.status === "COMPLETED"
        ).length;

        const totalHours = memberWorkLogs.reduce(
          (sum, log) =>
            sum + Number(log.hours || 0),
          0
        );

        const taskHours = memberTasks.reduce(
          (sum, task) =>
            sum + Number(task.hours || 0),
          0
        );

        const hours =
          totalHours > 0
            ? totalHours
            : taskHours;

        const progress =
          totalTasks > 0
            ? Math.round(
                memberTasks.reduce(
                  (sum, task) =>
                    sum + Number(task.progress || 0),
                  0
                ) / totalTasks
              )
            : 0;

        let peerEvaluation = 0;

        if (memberEvaluations.length > 0) {
          const evaluationScores =
            memberEvaluations.map((evaluation) => {
              const scores = [
                Number(
                  evaluation.responsibility || 0
                ),
                Number(
                  evaluation.communication || 0
                ),
                Number(
                  evaluation.teamwork || 0
                ),
                Number(
                  evaluation.quality || 0
                ),
              ];

              const total = scores.reduce(
                (sum, score) =>
                  sum + score,
                0
              );

              return total / scores.length;
            });

          peerEvaluation = Math.round(
            evaluationScores.reduce(
              (sum, score) =>
                sum + score,
              0
            ) / evaluationScores.length
          );
        }

        const taskCompletionRate =
          totalTasks > 0
            ? (completedTasks / totalTasks) * 100
            : 0;

        const contribution =
          totalTasks > 0
            ? Math.round(
                taskCompletionRate * 0.5 +
                  progress * 0.5
              )
            : 0;

        return {
          id: member.id,
          name: member.name,
          role:
            member.role ||
            "สมาชิกทีม",

          completedTasks,
          totalTasks,

          hours,

          progress,

          peerEvaluation,

          contribution,
        };
      })
      .sort(
        (a, b) =>
          b.contribution -
          a.contribution
      );
  }, [
    members,
    tasks,
    workLogs,
    evaluations,
  ]);

  const averageContribution = useMemo(() => {
    if (memberData.length === 0) {
      return 0;
    }

    return Math.round(
      memberData.reduce(
        (sum, member) =>
          sum + member.contribution,
        0
      ) / memberData.length
    );
  }, [memberData]);

  const highestMember = useMemo(() => {
    if (memberData.length === 0) {
      return null;
    }

    return memberData[0];
  }, [memberData]);

  const lowestMember = useMemo(() => {
    if (memberData.length === 0) {
      return null;
    }

    return memberData[
      memberData.length - 1
    ];
  }, [memberData]);

  const highest =
    highestMember?.contribution || 0;

  const lowest =
    lowestMember?.contribution || 0;

  const difference =
    highest - lowest;

  const isUnbalanced =
    memberData.length > 1 &&
    difference >= 20;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          การมีส่วนร่วม
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          วิเคราะห์การมีส่วนร่วมและภาระงานของสมาชิกในทีม
        </p>
      </div>

      {loading && (
        <div className="mb-6 rounded-xl border bg-white p-4 text-sm text-slate-500">
          กำลังโหลดข้อมูลการมีส่วนร่วม...
        </div>
      )}

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="การมีส่วนร่วมเฉลี่ย"
          value={`${averageContribution}%`}
          icon={
            <Users
              size={20}
              className="text-slate-700"
            />
          }
          iconBackground="bg-slate-100"
        />

        <SummaryCard
          title="การมีส่วนร่วมสูงสุด"
          value={`${highest}%`}
          icon={
            <CheckCircle2
              size={20}
              className="text-green-600"
            />
          }
          iconBackground="bg-green-50"
        />

        <SummaryCard
          title="การมีส่วนร่วมต่ำสุด"
          value={`${lowest}%`}
          icon={
            <AlertTriangle
              size={20}
              className="text-amber-600"
            />
          }
          iconBackground="bg-amber-50"
        />

        <SummaryCard
          title="ความแตกต่างของทีม"
          value={`${difference}%`}
          icon={
            <Clock3
              size={20}
              className="text-blue-600"
            />
          }
          iconBackground="bg-blue-50"
        />
      </div>

      <div className="mb-8 rounded-xl border bg-white shadow-sm">
        <div className="border-b px-6 py-5">
          <h2 className="font-semibold text-slate-900">
            การมีส่วนร่วมของสมาชิก
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            ข้อมูลการมีส่วนร่วมจากงานและข้อมูลการทำงานจริง
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px]">
            <thead>
              <tr className="border-b bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="px-6 py-4">
                  อันดับ
                </th>

                <th className="px-6 py-4">
                  สมาชิก
                </th>

                <th className="px-6 py-4">
                  การมีส่วนร่วม
                </th>

                <th className="px-6 py-4">
                  งาน
                </th>

                <th className="px-6 py-4">
                  ชั่วโมง
                </th>

                <th className="px-6 py-4">
                  ความคืบหน้า
                </th>

                <th className="px-6 py-4">
                  การประเมินจากเพื่อน
                </th>
              </tr>
            </thead>

            <tbody>
              {memberData.length > 0 ? (
                memberData.map(
                  (member, index) => (
                    <tr
                      key={member.id}
                      className="border-b last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-6 py-5">
                        <span className="font-semibold text-slate-700">
                          #{index + 1}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div>
                          <p className="font-medium text-slate-900">
                            {member.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {member.role}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="w-40">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-900">
                              {member.contribution}%
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                            <div
                              className="h-full rounded-full bg-slate-900 transition-all"
                              style={{
                                width: `${member.contribution}%`,
                              }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {member.completedTasks} /{" "}
                        {member.totalTasks}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {member.hours} ชั่วโมง
                      </td>

                      <td className="px-6 py-5">
                        <span className="text-sm font-medium text-slate-700">
                          {member.progress}%
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        {member.peerEvaluation > 0 ? (
                          <div className="flex items-center gap-2">
                            <Star
                              size={16}
                              className="fill-amber-400 text-amber-400"
                            />

                            <span className="text-sm font-medium text-slate-700">
                              {member.peerEvaluation}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-slate-400">
                            ไม่มีข้อมูล
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-10 text-center text-sm text-slate-500"
                  >
                    ไม่มีข้อมูลการมีส่วนร่วม
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div
              className={`rounded-lg p-3 ${
                isUnbalanced
                  ? "bg-amber-50"
                  : "bg-slate-100"
              }`}
            >
              {isUnbalanced ? (
                <AlertTriangle
                  size={20}
                  className="text-amber-600"
                />
              ) : (
                <CheckCircle2
                  size={20}
                  className="text-slate-600"
                />
              )}
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                ความสมดุลของทีม
              </h2>

              {memberData.length === 0 ? (
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  ยังไม่มีข้อมูลการมีส่วนร่วม
                </p>
              ) : isUnbalanced ? (
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  พบความแตกต่างของข้อมูลการมีส่วนร่วม
                  ระหว่างสมาชิกในทีม{" "}
                  <span className="font-semibold text-slate-900">
                    {difference}%
                  </span>
                </p>
              ) : (
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  ข้อมูลการมีส่วนร่วมในปัจจุบัน
                  ไม่พบความแตกต่างในระดับสูงระหว่างสมาชิกในทีม
                </p>
              )}
            </div>
          </div>

          {highestMember &&
            lowestMember && (
              <div className="mt-5 rounded-lg bg-slate-50 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    สูงสุด
                  </span>

                  <span className="font-medium text-slate-900">
                    {highestMember.name} — {highest}%
                  </span>
                </div>

                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-slate-500">
                    ต่ำสุด
                  </span>

                  <span className="font-medium text-slate-900">
                    {lowestMember.name} — {lowest}%
                  </span>
                </div>
              </div>
            )}
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            การคำนวณการมีส่วนร่วมปัจจุบัน
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            ระบบในระยะปัจจุบันใช้ข้อมูลจำนวนงานที่เสร็จ
            และความคืบหน้าของงานจริง
            โดยอัลกอริทึมการวิเคราะห์การมีส่วนร่วมฉบับสมบูรณ์
            จะพัฒนาต่อในระยะถัดไป
          </p>

          <div className="mt-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">
                งานที่เสร็จ
              </span>

              <span className="font-medium">
                50%
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-600">
                ความคืบหน้าของงาน
              </span>

              <span className="font-medium">
                50%
              </span>
            </div>

            <div className="border-t pt-3 text-xs leading-5 text-slate-400">
              ชั่วโมงการทำงานและการประเมินจากเพื่อน
              แสดงเป็นข้อมูลประกอบ
              และสามารถนำไปใช้ร่วมกับการวิเคราะห์ในระยะถัดไป
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  icon,
  iconBackground,
}) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </p>
        </div>

        <div
          className={`rounded-lg p-3 ${iconBackground}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Contribution;

