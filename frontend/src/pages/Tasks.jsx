import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api/tasks";

import { getProjects } from "../api/projects";
import { getMembers } from "../api/members";

// หมวดหมู่งาน (แสดงเป็นภาษาอังกฤษตามค่าที่เก็บในฐานข้อมูล)
const CATEGORIES = [
  "Backend",
  "Frontend",
  "Database",
  "Documentation",
  "Testing",
  "Design",
];

// สถานะ: value = ค่าที่ตรงกับ Backend, label = ข้อความที่แสดง
const STATUSES = [
  { value: "PENDING", label: "รอดำเนินการ" },
  { value: "IN_PROGRESS", label: "กำลังทำ" },
  { value: "COMPLETED", label: "เสร็จแล้ว" },
];

const STATUS_STYLES = {
  PENDING: "bg-slate-100 text-slate-700",
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-green-100 text-green-700",
};

const EMPTY_FORM = {
  title: "",
  memberId: "",
  projectId: "",
  category: "Frontend",
  hours: "",
  status: "PENDING",
};

// แปลงข้อมูลงานจาก API เป็นรูปแบบที่หน้านี้ใช้
function formatTask(task) {
  return {
    id: task.id,
    title: task.title,
    memberName: task.member?.name || "ยังไม่มอบหมาย",
    memberId: task.memberId || "",
    projectId: task.projectId || "",
    category: task.category || "",
    hours: task.hours || 0,
    status: task.status || "PENDING",
  };
}

function Tasks() {
  // =========================
  // State
  // =========================
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [form, setForm] = useState(EMPTY_FORM);

  // =========================
  // Load data
  // =========================
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);

      const [taskData, memberData, projectData] =
        await Promise.all([
          getTasks(),
          getMembers(),
          getProjects(),
        ]);

      setTasks(taskData.map(formatTask));
      setMembers(memberData);
      setProjects(projectData);
    } catch (error) {
      console.error("Failed to load tasks:", error);
      alert("ไม่สามารถโหลดข้อมูลงานได้");
    } finally {
      setLoading(false);
    }
  }

  async function reloadTasks() {
    try {
      const taskData = await getTasks();
      setTasks(taskData.map(formatTask));
    } catch (error) {
      console.error("Failed to reload tasks:", error);
      alert("ไม่สามารถโหลดข้อมูลงานได้");
    }
  }

  // =========================
  // Search / Filter
  // =========================
  const filteredTasks = useMemo(() => {
    const searchText = search.toLowerCase();

    return tasks.filter((task) => {
      const matchSearch =
        task.title.toLowerCase().includes(searchText) ||
        task.memberName.toLowerCase().includes(searchText) ||
        task.category.toLowerCase().includes(searchText);

      const matchStatus =
        statusFilter === "All" ||
        task.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [tasks, search, statusFilter]);

  // สมาชิกที่เลือกได้ = เฉพาะสมาชิกในโครงการที่เลือก
  const availableMembers = useMemo(() => {
    if (!form.projectId) return [];

    return members.filter(
      (member) => member.projectId === form.projectId
    );
  }, [members, form.projectId]);

  // =========================
  // Summary
  // =========================
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "COMPLETED"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "IN_PROGRESS"
  ).length;

  const totalHours = tasks.reduce(
    (total, task) => total + Number(task.hours || 0),
    0
  );

  // =========================
  // Modal
  // =========================
  const openAddModal = () => {
    const firstProjectId = projects[0]?.id || "";

    const firstMember = members.find(
      (member) => member.projectId === firstProjectId
    );

    setEditingTask(null);

    setForm({
      ...EMPTY_FORM,
      projectId: firstProjectId,
      memberId: firstMember?.id || "",
    });

    setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);

    setForm({
      title: task.title,
      memberId: task.memberId,
      projectId: task.projectId,
      category: task.category,
      hours: task.hours,
      status: task.status,
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
    setForm(EMPTY_FORM);
  };

  // =========================
  // Form
  // =========================
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => {
      const nextForm = { ...previousForm, [name]: value };

      // เปลี่ยนโครงการ -> ล้างสมาชิกถ้าไม่ได้อยู่ในโครงการใหม่
      if (name === "projectId") {
        const stillInProject = members.some(
          (member) =>
            member.id === previousForm.memberId &&
            member.projectId === value
        );

        if (!stillInProject) {
          nextForm.memberId = "";
        }
      }

      return nextForm;
    });
  };

  // =========================
  // Create / Update
  // =========================
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.title.trim()) {
      alert("กรุณากรอกชื่องาน");
      return;
    }

    if (!form.hours || Number(form.hours) <= 0) {
      alert("จำนวนชั่วโมงต้องมากกว่า 0");
      return;
    }

    if (!form.projectId) {
      alert("กรุณาเลือกโครงการ");
      return;
    }

    if (!form.memberId) {
      alert("กรุณาเลือกสมาชิกที่รับผิดชอบ");
      return;
    }

    if (!form.category) {
      alert("กรุณาเลือกหมวดหมู่งาน");
      return;
    }

    const data = {
      title: form.title.trim(),
      category: form.category,
      hours: Number(form.hours),
      status: form.status,
      projectId: form.projectId,
      memberId: form.memberId,
    };

    try {
      if (editingTask) {
        await updateTask(editingTask.id, data);
      } else {
        await createTask(data);
      }

      await reloadTasks();
      closeModal();
    } catch (error) {
      console.error("Failed to save task:", error);
      alert("ไม่สามารถบันทึกงานได้");
    }
  };

  // =========================
  // Delete
  // =========================
  const handleDelete = async (task) => {
    const confirmed = window.confirm(
      `ต้องการลบงาน "${task.title}" ใช่หรือไม่?\n\nบันทึกเวลาทำงานที่เชื่อมโยงกับงานนี้อาจถูกลบไปด้วย`
    );

    if (!confirmed) return;

    try {
      await deleteTask(task.id);
      await reloadTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("ไม่สามารถลบงานได้");
    }
  };

  // =========================
  // Change Status
  // =========================
  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await updateTask(taskId, { status: newStatus });
      await reloadTasks();
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("ไม่สามารถอัปเดตสถานะได้");
    }
  };

  // =========================
  // UI Helpers
  // =========================
  const getMemberInitial = (name) => {
    if (!name) return "?";

    const words = name.trim().split(" ");

    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }

    return name.substring(0, 2).toUpperCase();
  };

  // ถ้างานเดิมมี category ที่ไม่อยู่ในรายการ ให้ยังเลือกได้ตอนแก้ไข
  const categoryOptions =
    form.category && !CATEGORIES.includes(form.category)
      ? [form.category, ...CATEGORIES]
      : CATEGORIES;

  // =========================
  // Render
  // =========================
  return (
    <div>
      {/* Header */}
      <div className="mb-7 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            งาน
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            จัดการและติดตามงานของทีม
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          <Plus size={17} />
          เพิ่มงาน
        </button>
      </div>

      {/* Summary Cards */}
      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            งานทั้งหมด
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {totalTasks}
          </h2>
        </div>

        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            เสร็จแล้ว
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {completedTasks}
          </h2>
        </div>

        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            กำลังทำ
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {inProgressTasks}
          </h2>
        </div>

        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            ชั่วโมงรวม
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {totalHours} ชม.
          </h2>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="ค้นหางาน สมาชิก หรือหมวดหมู่..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-slate-900"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
        >
          <option value="All">ทุกสถานะ</option>

          {STATUSES.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </div>

      {/* Task Table */}
      <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="border-b border-slate-300 bg-white">
              <tr className="text-xs uppercase text-slate-500">
                <th className="px-5 py-4 font-medium">
                  งาน
                </th>

                <th className="px-5 py-4 font-medium">
                  ผู้รับผิดชอบ
                </th>

                <th className="px-5 py-4 font-medium">
                  หมวดหมู่
                </th>

                <th className="px-5 py-4 font-medium">
                  ชั่วโมง
                </th>

                <th className="px-5 py-4 font-medium">
                  สถานะ
                </th>

                <th className="px-5 py-4 text-center font-medium">
                  การจัดการ
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-10 text-center text-sm text-slate-500"
                  >
                    กำลังโหลดข้อมูลงาน...
                  </td>
                </tr>
              ) : filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-b border-slate-200 last:border-b-0"
                  >
                    {/* Task */}
                    <td className="px-5 py-4 text-sm font-medium text-slate-900">
                      {task.title}
                    </td>

                    {/* Member */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                          {getMemberInitial(task.memberName)}
                        </div>

                        <span className="text-sm text-slate-700">
                          {task.memberName}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                        {task.category || "ไม่ระบุ"}
                      </span>
                    </td>

                    {/* Hours */}
                    <td className="px-5 py-4 text-sm text-slate-700">
                      {task.hours} ชม.
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <select
                        value={task.status}
                        onChange={(event) =>
                          handleStatusChange(
                            task.id,
                            event.target.value
                          )
                        }
                        className={`rounded-full border-0 px-3 py-1 text-xs font-medium outline-none ${
                          STATUS_STYLES[task.status] ||
                          STATUS_STYLES.PENDING
                        }`}
                      >
                        {STATUSES.map((status) => (
                          <option
                            key={status.value}
                            value={status.value}
                          >
                            {status.label}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            openEditModal(task)
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                          title="แก้ไขงาน"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(task)
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                          title="ลบงาน"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-10 text-center text-sm text-slate-500"
                  >
                    ไม่พบงาน
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
            {/* Modal Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {editingTask
                    ? "แก้ไขงาน"
                    : "เพิ่มงานใหม่"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  กรอกข้อมูลงานและเลือกผู้รับผิดชอบ
                </p>
              </div>

              <button
                onClick={closeModal}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Task Title */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  ชื่องาน
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="เช่น ออกแบบหน้า Dashboard"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                />
              </div>

              {/* Project */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  โครงการ
                </label>

                <select
                  name="projectId"
                  value={form.projectId}
                  onChange={handleFormChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                >
                  <option value="">
                    เลือกโครงการ
                  </option>

                  {projects.map((project) => (
                    <option
                      key={project.id}
                      value={project.id}
                    >
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Member */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  ผู้รับผิดชอบ
                </label>

                <select
                  name="memberId"
                  value={form.memberId}
                  onChange={handleFormChange}
                  disabled={!form.projectId}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900 disabled:bg-slate-100 disabled:text-slate-400"
                >
                  <option value="">
                    {form.projectId
                      ? "เลือกสมาชิก"
                      : "เลือกโครงการก่อน"}
                  </option>

                  {availableMembers.map((member) => (
                    <option
                      key={member.id}
                      value={member.id}
                    >
                      {member.name}
                    </option>
                  ))}
                </select>

                {form.projectId &&
                  availableMembers.length === 0 && (
                    <p className="mt-1 text-xs text-slate-500">
                      โครงการนี้ยังไม่มีสมาชิก
                      กรุณาเพิ่มสมาชิกที่หน้า "สมาชิกทีม" ก่อน
                    </p>
                  )}
              </div>

              {/* Category */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  หมวดหมู่
                </label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                >
                  <option value="">
                    เลือกหมวดหมู่
                  </option>

                  {categoryOptions.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hours */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  ชั่วโมง
                </label>

                <input
                  type="number"
                  name="hours"
                  value={form.hours}
                  onChange={handleFormChange}
                  min="0.5"
                  step="0.5"
                  placeholder="เช่น 2.5"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                />
              </div>

              {/* Status */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  สถานะ
                </label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleFormChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                >
                  {STATUSES.map((status) => (
                    <option
                      key={status.value}
                      value={status.value}
                    >
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  ยกเลิก
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  {editingTask
                    ? "บันทึกการแก้ไข"
                    : "เพิ่มงาน"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;