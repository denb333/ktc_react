"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const pathname = usePathname();
    const links = [
        { href: "/task-ssr", label: "Task SSR" },
        { href: "/task-ssg", label: "Task SSG" },
        { href: "/task-isr/9", label: "Task ISR" },
        { href: "/task-csr", label: "Task CSR" },
      ];
    
      return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">Task App</div>
    
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-yellow-300 transition ${
                      pathname.startsWith(link.href) ? "text-yellow-400 font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
    }
