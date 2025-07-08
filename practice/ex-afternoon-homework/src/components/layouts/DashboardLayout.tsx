import { NavLink, Outlet } from "react-router";

const sideLink = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-2 rounded 
   ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`;

export default function DashboardLayout() {
  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-6">
      {/* ===== sidebar ===== */}
      <aside className="border-r pr-2">
        <h2 className="font-semibold mb-2">Dashboard</h2>
        <NavLink to="" end className={sideLink}>
          Tổng quan
        </NavLink>
        <NavLink to="reports" className={sideLink}>
          Báo cáo
        </NavLink>
        <NavLink to="settings" className={sideLink}>
          Cài đặt
        </NavLink>
      </aside>

      {/* ===== nội dung con ===== */}
      <section>
        <Outlet />
      </section>
    </div>
  );
}
