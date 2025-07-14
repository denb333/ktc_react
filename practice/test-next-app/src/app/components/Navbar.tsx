"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  // const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 w-full shadow fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Empty div for left spacing if needed */}
        <div className="w-24" />
        {/* Center nav links */}
        <ul className="flex space-x-8 justify-center flex-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  "relative transition-all duration-300 px-2 py-1 rounded focus:outline-none group"
                }
              >
                <span className="inline-block transition-transform duration-300 group-hover:scale-110">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Login button on the right */}
        <div className="flex items-center justify-end">
          <Link
            href="/login"
            className="relative transition-all duration-300 px-4 py-1 rounded focus:outline-none group font-semibold hover:bg-white hover:text-blue-600"
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-110">
              Login
            </span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
} 