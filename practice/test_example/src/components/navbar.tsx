import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="bg-white rounded-full p-1 mr-2 transform transition-transform duration-300 hover:scale-110">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="#6366F1" />
                            <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                    <Link to="/" className="font-extrabold text-2xl tracking-tight text-white hover:text-yellow-300 transition-colors duration-200">
                        User Management
                    </Link>
                </div>
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
                <div className={`flex-col md:flex-row md:flex md:items-center gap-6 md:gap-8 font-medium text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-indigo-600 to-blue-500 md:bg-none shadow-lg md:shadow-none transition-all duration-500 ease-in-out ${menuOpen ? 'flex animate-slide-down' : 'hidden md:flex'}`}>
                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            `group block px-4 py-2 md:p-0 rounded md:rounded-none transition-colors duration-200 relative ${isActive ? 'text-yellow-300 font-bold' : 'hover:text-yellow-300 text-white'}`
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="inline-block group-hover:scale-105 transition-transform duration-200">Home</span>
                        <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-yellow-300 transition-all duration-300 rounded-full"></span>
                    </NavLink>
                    <NavLink
                        to="/users/form"
                        className={({ isActive }) =>
                            `group block px-4 py-2 md:p-0 rounded md:rounded-none transition-colors duration-200 relative ${isActive ? 'text-yellow-300 font-bold' : 'hover:text-yellow-300 text-white'}`
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="inline-block group-hover:scale-105 transition-transform duration-200">UserForm</span>
                        <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-yellow-300 transition-all duration-300 rounded-full"></span>
                    </NavLink>
                </div>
            </div>
            <style>{`
                @keyframes slide-down {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-down {
                    animation: slide-down 0.4s cubic-bezier(0.4,0,0.2,1);
                }
                .group:hover .group-hover\:w-full { width: 100% !important; }
            `}</style>
        </nav>
    );
}
