import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import type { User } from "../types/type";

export default function NavBar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user) as User);
      }
    }, []);
  
    const handleLogout = () => {
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      window.location.href = '/';
    };
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white px-6 py-3 shadow flex items-center justify-between">
          <div className="space-x-4">
            <NavLink
              className={({ isActive }) =>
                `hover:underline ${isActive ? 'font-bold underline' : ''}`
              }
              to="/ourtask"
            >
              Tasks
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:underline ${isActive ? 'font-bold underline' : ''}`
              }
              to="/assignee-me"
            >
              My Tasks
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:underline ${isActive ? 'font-bold underline' : ''}`
              }
              to="/create-task"
            >   
              Create Task
            </NavLink>
          </div>
          <div>
            <input className='bg-gray-200 rounded-md p-2 text-black' type="text" placeholder="Search" />
          </div>
          {user && (
            <div className="flex items-center space-x-4">
              <span>{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </nav>

    )
}