"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  FolderKanban,
} from "lucide-react";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../api/projects";

import { getMembers } from "../../api/members";
import { getTasks } from "../../api/tasks";

const EMPTY_FORM = {
  name: "",
  description: "",
};

function Projects() {
  // =========================
  // State
  // =========================
  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

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

      const [projectData, memberData, taskData] =
        await Promise.all([
          getProjects(),
          getMembers(),
          getTasks(),
        ]);

      setProjects(projectData);
      setMembers(memberData);
      setTasks(taskData);
    } catch (error) {
      console.error("Failed to load projects:", error);
      alert("ไม่สามารถโหลดข้อมูลโครงงานได้");
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // Counts per project
  // =========================
  const projectStats = useMemo(() => {
    const stats = {};

    projects.forEach((project) => {
      stats[project.id] = { members: 0, tasks: 0 };
    });

    members.forEach((member) => {
      if (stats[member.projectId]) {
        stats[member.projectId].members += 1;
      }
    });

    tasks.forEach((task) => {
      if (stats[task.projectId]) {
        stats[task.projectId].tasks += 1;
      }
    });

    return stats;
  }, [projects, members, tasks]);

  // =========================
  // Modal
  // =========================
  const openAddModal = () => {
    setEditingProject(null);
    setForm(EMPTY_FORM);
    setIsModalOpen(true);
  };

  const openEditModal = (project) => {
    setEditingProject(project);

    setForm({
      name: project.name || "",
      description: project.description || "",
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
    setForm(EMPTY_FORM);
  };

  // =========================
  // Form
  // =========================
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  // =========================
  // Create / Update
  // =========================
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      alert("กรุณากรอกชื่อโครงงาน");
      return;
    }

    const data = {
      name: form.name.trim(),
      description: form.description.trim() || null,
    };

    try {
      if (editingProject) {
        await updateProject(editingProject.id, data);
      } else {
        await createProject(data);
      }

      await loadData();
      closeModal();
    } catch (error) {
      console.error("Failed to save project:", error);
      alert("ไม่สามารถบันทึกโครงงานได้");
    }
  };

  // =========================
  // Delete
  // =========================
  const handleDelete = async (project) => {
    const stats = projectStats[project.id] || {
      members: 0,
      tasks: 0,
    };

    const confirmed = window.confirm(
      `ต้องการลบโครงงาน "${project.name}" ใช่หรือไม่?\n\n` +
        `โครงงานนี้มีสมาชิก ${stats.members} คน และงาน ${stats.tasks} งาน\n` +
        `ข้อมูลที่เชื่อมโยงอาจถูกลบไปด้วย`
    );

    if (!confirmed) return;

    try {
      await deleteProject(project.id);
      await loadData();
    } catch (error) {
      console.error("Failed to delete project:", error);
      alert(
        "ไม่สามารถลบโครงงานได้ (อาจยังมีสมาชิกหรืองานที่เชื่อมโยงอยู่)"
      );
    }
  };

  // =========================
  // Render
  // =========================
  return (
    <div>
      {/* Header */}
      <div className="mb-7 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            โครงงาน
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            จัดการโครงงานที่ทีมรับผิดชอบ
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          <Plus size={17} />
          เพิ่มโครงงาน
        </button>
      </div>

      {/* Summary */}
      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
              <FolderKanban size={20} className="text-slate-700" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                โครงงานทั้งหมด
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {projects.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            สมาชิกทั้งหมด
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {members.length}
          </h2>
        </div>

        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            งานทั้งหมด
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {tasks.length}
          </h2>
        </div>
      </div>

      {/* Project Table */}
      <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="border-b border-slate-300 bg-white">
              <tr className="text-xs uppercase text-slate-500">
                <th className="px-5 py-4 font-medium">
                  โครงงาน
                </th>

                <th className="px-5 py-4 font-medium">
                  สมาชิก
                </th>

                <th className="px-5 py-4 font-medium">
                  งาน
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
                    colSpan="4"
                    className="px-5 py-10 text-center text-sm text-slate-500"
                  >
                    กำลังโหลดข้อมูลโครงงาน...
                  </td>
                </tr>
              ) : projects.length > 0 ? (
                projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-slate-200 last:border-b-0"
                  >
                    {/* Project */}
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-900">
                        {project.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        {project.description || "ไม่มีรายละเอียด"}
                      </p>
                    </td>

                    {/* Members */}
                    <td className="px-5 py-4 text-sm text-slate-700">
                      {projectStats[project.id]?.members || 0} คน
                    </td>

                    {/* Tasks */}
                    <td className="px-5 py-4 text-sm text-slate-700">
                      {projectStats[project.id]?.tasks || 0} งาน
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => openEditModal(project)}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                          title="แก้ไขโครงงาน"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          onClick={() => handleDelete(project)}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                          title="ลบโครงงาน"
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
                    colSpan="4"
                    className="px-5 py-10 text-center text-sm text-slate-500"
                  >
                    ยังไม่มีโครงงานในระบบ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            {/* Modal Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {editingProject
                    ? "แก้ไขโครงงาน"
                    : "เพิ่มโครงงานใหม่"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  กรอกชื่อและรายละเอียดของโครงงาน
                </p>
              </div>

              <button
                onClick={closeModal}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  ชื่อโครงงาน
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="เช่น ระบบจัดการงานกลุ่ม"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  รายละเอียด (ไม่บังคับ)
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  rows={3}
                  placeholder="อธิบายโครงงานโดยย่อ"
                  className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                />
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
                  {editingProject
                    ? "บันทึกการแก้ไข"
                    : "เพิ่มโครงงาน"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;