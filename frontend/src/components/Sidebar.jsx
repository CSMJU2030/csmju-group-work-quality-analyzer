import {
  LayoutDashboard,
  ClipboardList,
  TrendingUp,
  Users,
  UserRound,
  History,
  FileBarChart,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { FolderKanban } from "lucide-react";

const menuItems = [
  {
    name: "แดชบอร์ด",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "งาน",
    path: "/tasks",
    icon: ClipboardList,
  },
  {
    name: "สมาชิกทีม",
    path: "/members",
    icon: UserRound,
  },
  { name: "โครงงาน", path: "/projects", icon: FolderKanban },
  {
    name: "ความคืบหน้า",
    path: "/progress",
    icon: TrendingUp,
  },
  {
    name: "การมีส่วนร่วม",
    path: "/contribution",
    icon: Users,
  },
  {
    name: "ประวัติการทำงาน",
    path: "/history",
    icon: History,
  },
  {
    name: "รายงาน",
    path: "/reports",
    icon: FileBarChart,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r bg-white">

      <div className="border-b px-6 py-5">
        <h1 className="text-lg font-bold text-slate-900">
          CSMJU TeamWork
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          ระบบวิเคราะห์และติดตามคุณภาพการทำงานกลุ่ม
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          เมนู
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </div>

      </nav>

      <div className="border-t p-4">
        <div className="rounded-xl bg-slate-100 p-4">

          <p className="text-xs text-slate-500">
            โครงการปัจจุบัน
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            ระบบจัดการงานกลุ่ม
          </p>

          <p className="mt-1 text-xs text-slate-500">
            จัดการสมาชิกผ่านเมนูสมาชิกทีม
          </p>

        </div>
      </div>

    </aside>
  );
}

export default Sidebar;

