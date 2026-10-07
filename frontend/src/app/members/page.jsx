"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Users,
} from "lucide-react";

import {
  getMembers,
  createMember,
  updateMember,
  deleteMember,
} from "../../api/members";

import { getProjects } from "../../api/projects";

// ตัวเลือกตำแหน่ง / หน้าที่ (แก้ไขรายการได้ที่นี่ที่เดียว)
const ROLE_OPTIONS = [
  "Project Manager",
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "Database Designer",
  "UI/UX Designer",
  "Tester / QA",
  "Documentation",
];

function Members() {
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    projectId: "",
  });

  // =========================
  // Load Data
  // =========================

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);

      const [memberData, projectData] = await Promise.all([
        getMembers(),
        getProjects(),
      ]);

      setMembers(memberData);
      setProjects(projectData);
    } catch (error) {
      console.error("Failed to load members:", error);
      alert("ไม่สามารถโหลดข้อมูลสมาชิกได้");
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // Modal
  // =========================

  const openAddModal = () => {
    setEditingMember(null);

    setForm({
      name: "",
      role: "",
      projectId: projects[0]?.id || "",
    });

    setIsModalOpen(true);
  };

  const openEditModal = (member) => {
    setEditingMember(member);

    setForm({
      name: member.name || "",
      role: member.role || "",
      projectId: member.projectId || "",
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingMember(null);

    setForm({
      name: "",
      role: "",
      projectId: "",
    });
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
      alert("กรุณากรอกชื่อสมาชิก");
      return;
    }

    if (!form.role) {
      alert("กรุณาเลือกตำแหน่ง / หน้าที่");
      return;
    }

    if (!form.projectId) {
      alert("กรุณาเลือกโครงการ");
      return;
    }

    try {
      const data = {
        name: form.name.trim(),
        role: form.role,
        projectId: form.projectId,
      };

      if (editingMember) {
        await updateMember(editingMember.id, data);
      } else {
        await createMember(data);
      }

      await loadData();
      closeModal();
    } catch (error) {
      console.error("Failed to save member:", error);
      alert("ไม่สามารถบันทึกข้อมูลสมาชิกได้");
    }
  };

  // =========================
  // Delete
  // =========================

  const handleDelete = async (member) => {
    const confirmed = window.confirm(
      `ต้องการลบสมาชิก "${member.name}" ใช่หรือไม่?\n\nข้อมูลการทำงานที่เชื่อมโยงกับสมาชิกคนนี้อาจถูกลบไปด้วย`
    );

    if (!confirmed) return;

    try {
      await deleteMember(member.id);

      await loadData();
    } catch (error) {
      console.error("Failed to delete member:", error);
      alert("ไม่สามารถลบสมาชิกได้");
    }
  };

  // =========================
  // Helpers
  // =========================

  const getProjectName = (projectId) => {
    const project = projects.find(
      (item) => item.id === projectId
    );

    return project?.name || "ไม่ระบุโครงการ";
  };

  const getMemberInitial = (name) => {
    if (!name) return "?";

    const words = name.trim().split(" ");

    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }

    return name.substring(0, 2).toUpperCase();
  };

  // ถ้าสมาชิกเดิมมี role ที่ไม่อยู่ในรายการ ให้ยังแสดงเป็นตัวเลือกได้
  const roleOptions =
    form.role && !ROLE_OPTIONS.includes(form.role)
      ? [form.role, ...ROLE_OPTIONS]
      : ROLE_OPTIONS;

  // =========================
  // Render
  // =========================

  return (
    <div>

      {/* Header */}
      <div className="mb-7 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            สมาชิกทีม
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            จัดการสมาชิกและกำหนดสมาชิกให้กับโครงการ
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          <Plus size={17} />
          เพิ่มสมาชิก
        </button>
      </div>

      {/* Summary */}
      <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
              <Users size={20} className="text-slate-700" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                สมาชิกทั้งหมด
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {members.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            จำนวนโครงการ
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {projects.length}
          </h2>
        </div>

        <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            สมาชิกที่มีโครงการ
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {
              members.filter(
                (member) => member.projectId
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Member Table */}
      <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
        <div className="overflow-x-auto">

          <table className="w-full min-w-[650px] text-left">

            <thead className="border-b border-slate-300 bg-white">
              <tr className="text-xs uppercase text-slate-500">

                <th className="px-5 py-4 font-medium">
                  สมาชิก
                </th>

                <th className="px-5 py-4 font-medium">
                  ตำแหน่ง / หน้าที่
                </th>

                <th className="px-5 py-4 font-medium">
                  โครงการ
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
                    กำลังโหลดข้อมูลสมาชิก...
                  </td>
                </tr>
              ) : members.length > 0 ? (
                members.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-slate-200 last:border-b-0"
                  >

                    {/* Member */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                          {getMemberInitial(member.name)}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {member.name}
                          </p>

                          <p className="text-xs text-slate-400">
                            สมาชิกทีม
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* Role */}
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                        {member.role || "สมาชิกทีม"}
                      </span>
                    </td>

                    {/* Project */}
                    <td className="px-5 py-4 text-sm text-slate-700">
                      {getProjectName(member.projectId)}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() =>
                            openEditModal(member)
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                          title="แก้ไขสมาชิก"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(member)
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                          title="ลบสมาชิก"
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
                    ยังไม่มีสมาชิกในระบบ
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
                  {editingMember
                    ? "แก้ไขสมาชิก"
                    : "เพิ่มสมาชิกใหม่"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  กรอกชื่อ เลือกหน้าที่ และเลือกโครงการ
                </p>
              </div>

              <button
                onClick={closeModal}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  ชื่อสมาชิก
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="เช่น สมชาย ใจดี"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                />
              </div>

              {/* Role */}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  ตำแหน่ง / หน้าที่
                </label>

                <select
                  name="role"
                  value={form.role}
                  onChange={handleFormChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                >
                  <option value="">
                    เลือกตำแหน่ง / หน้าที่
                  </option>

                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
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
                  required
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
                  {editingMember
                    ? "บันทึกการแก้ไข"
                    : "เพิ่มสมาชิก"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </div>
  );
}

export default Members;