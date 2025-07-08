import { NavLink, Outlet } from "react-router";
import { HomeIcon, BarChart3, Info } from "lucide-react";

export default function MainLayout() {
  /** className động: NavLink v6 truyền prop isActive */
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-1 px-3 py-2 rounded 
     ${isActive ? "text-white bg-blue-600" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <>
      <nav className="flex gap-2 p-4 shadow bg-white">
        <NavLink to="/" className={linkClass}>
          <HomeIcon className="w-4 h-4" /> Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          <Info className="w-4 h-4" /> About
        </NavLink>
        <NavLink to="/dashboard" className={linkClass}>
          <BarChart3 className="w-4 h-4" /> Dashboard
        </NavLink>
      </nav>

      {/* Outlet để vẽ các route con */}
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
}
