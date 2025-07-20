import React from "react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../authStore/useAuthStore";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Tasks", to: "/tasks" },
  { name: "My Tasks", to: "/my-tasks" },
  { name: "Security", to: "/security" },
];

export default function Navbar() {
  const { logOut } = useAuthStore((state) => state);
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="border-b border-gray-200 sticky top-0 z-30 bg-white/80 backdrop-blur-md transition-shadow duration-500" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
      <nav
        className={`mx-20 px-4 py-2 flex items-center justify-between shadow-sm bg-white transition-all duration-700 ease-out
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-bold text-xl">MyApp</span>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative text-gray-700 font-medium transition-colors duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              <span className="pb-1 transition-all duration-300 border-b-2 border-transparent hover:border-blue-500">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        {/* User Avatar & Logout */}
        <div className="flex items-center gap-3">
          <button
            className="ml-4 bg-red-500 hover:bg-red-600 active:scale-95 text-white rounded-md text-xs px-4 py-2 transition-all duration-150 shadow-sm"
            onClick={() => {
              logOut();
              navigate('/login');
            }}
          >
            Đăng xuất
          </button>
        </div>
        {/* Mobile menu button (ẩn nếu không dùng) */}
        <div className="md:hidden flex items-center"></div>
      </nav>
    </div>
  );
}
