"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { User } from "../types/index";
import Link from "next/link";

export default function NavBar() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const pathname = usePathname(); 
    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user) as User);
      }
    }, []);
  
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        setUser(null);
        router.push("/login");
      };
      const navLinks = [
        { href: "/ourtask", label: "Tasks" },
        { href: "/assignee-me", label: "My Tasks" },
        { href: "/create-task", label: "Create Task" },
      ];
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 shadow-lg flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-4">
            <span className="bg-white rounded-full p-1 mr-2 transform transition-transform duration-300 hover:scale-110">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#6366F1" />
                <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-extrabold text-2xl tracking-tight text-white drop-shadow-lg select-none">Task Manager</span>
            <div className="hidden md:flex items-center gap-4 ml-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-2 py-1 transition-colors duration-200 ${pathname === link.href ? "text-yellow-300 font-bold" : "hover:text-yellow-300 text-white"}`}
                >
                  <span className="inline-block group-hover:scale-105 transition-transform duration-200">{link.label}</span>
                  <span className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-300 rounded-full transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : 'w-0'}`}></span>
                </Link>
              ))}
            </div>
          </div>
  
          <div className="flex-1 flex justify-center">
            <input
              className="bg-white/80 focus:bg-white rounded-md p-2 text-black 20 md:w-64 transition-all duration-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              placeholder="Search"
            />
          </div>
  
          {user && (
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-sm md:text-base bg-white/20 px-3 py-1 rounded-full shadow-sm">{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 text-white px-4 py-1 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Logout
              </button>
            </div>
          )}
          <style>{`
            @keyframes fade-in {
              0% { opacity: 0; transform: translateY(-20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fade-in 0.5s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </nav>
    )
}