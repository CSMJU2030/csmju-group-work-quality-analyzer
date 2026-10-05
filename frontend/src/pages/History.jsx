import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  Circle,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";

import { apiRequest } from "../api/client";

function History() {
  const [workLogs, setWorkLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadHistoryData();
  }, []);

  async function loadHistoryData() {
    try {
      setLoading(true);
      setError("");

      const workLogsData = await apiRequest("/work-logs");

      setWorkLogs(
        Array.isArray(workLogsData) ? workLogsData : []
      );
    } catch (err) {
      console.error("ไม่สามารถโหลดประวัติการทำงานได้:", err);
      setError(err.message || "โหลดข้อมูลไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  }

  /*
   * Build History Data
   * (backend ส่ง member และ task มาให้แล้วผ่าน include)
   */

  const historyData = useMemo(() => {
    return workLogs
      .filter((log) => log.task && log.member)
      .map((log) => ({
        id: log.id,
        date: log.workDate,
        member: log.member.name,
        task: log.task.title,
        category: log.task.category || "ทั่วไป",
        hours: Number(log.hours || 0),
        status: getStatusLabel(log.task.status),
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [workLogs]);

  /*
   * Summary
   */

  const totalActivities = historyData.length;

  const totalHours = historyData.reduce(
    (sum, item) => sum + Number(item.hours || 0),
    0
  );

  const completedCount = historyData.filter(
    (item) => item.status === "เสร็จแล้ว"
  ).length;

  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          ประวัติการทำงาน
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          ติดตามกิจกรรมการทำงานและการอัปเดตงานที่ผ่านมา
        </p>
      </div>

      {/* Loading */}

      {loading && (
        <div className="mb-6 rounded-xl border bg-white p-4 text-sm text-slate-500">
          กำลังโหลดประวัติการทำงาน...
        </div>
      )}

      {/* Error */}

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Summary */}

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <SummaryCard
          title="กิจกรรมทั้งหมด"
          value={totalActivities}
          icon={
            <CalendarDays size={20} className="text-slate-700" />
          }
        />

        <SummaryCard
          title="ชั่วโมงการทำงานทั้งหมด"
          value={`${totalHours} ชั่วโมง`}
          icon={<Clock3 size={20} className="text-slate-700" />}
        />

        <SummaryCard
          title="กิจกรรมที่เสร็จแล้ว"
          value={completedCount}
          icon={
            <CheckCircle2 size={20} className="text-slate-700" />
          }
        />
      </div>

      {/* History Table */}

      <div className="overflow-hidden rounded-xl border bg-white">
        <div className="border-b px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-900">
            ประวัติกิจกรรม
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            กิจกรรมการทำงานล่าสุดของสมาชิกในทีม
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b bg-slate-50">
              <tr>
                {[
                  "วันที่",
                  "สมาชิก",
                  "งาน",
                  "หมวดหมู่",
                  "ชั่วโมง",
                  "สถานะ",
                ].map((label) => (
                  <th
                    key={label}
                    className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {historyData.length > 0 ? (
                historyData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDate(item.date)}
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-900">
                        {item.member}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-800">
                        {item.task}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Clock3 size={15} />
                        {item.hours} ชั่วโมง
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-10 text-center text-sm text-slate-500"
                  >
                    ไม่มีประวัติการทำงาน
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/*
 * Summary Card
 */

function SummaryCard({ title, value, icon }) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-slate-100 p-2">{icon}</div>

        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <p className="text-2xl font-bold text-slate-900">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

/*
 * Status Badge
 */

function StatusBadge({ status }) {
  const isCompleted = status === "เสร็จแล้ว";

  return (
    <div className="flex items-center gap-2">
      {isCompleted ? (
        <CheckCircle2 size={17} className="text-green-600" />
      ) : (
        <Circle size={17} className="text-amber-500" />
      )}

      <span
        className={`text-sm font-medium ${
          isCompleted ? "text-green-600" : "text-amber-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

/*
 * Status Label
 */

function getStatusLabel(status) {
  switch (status) {
    case "COMPLETED":
      return "เสร็จแล้ว";

    case "IN_PROGRESS":
      return "กำลังดำเนินการ";

    case "PENDING":
      return "รอดำเนินการ";

    default:
      return "ไม่ทราบสถานะ";
  }
}

/*
 * Date Formatter
 */

function formatDate(dateValue) {
  if (!dateValue) {
    return "-";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleDateString("th-TH", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default History;