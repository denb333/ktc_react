import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/products", label: "Products" },
  { href: "/login", label: "Login" },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-700">NextDemo</span>
            </div>
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-700 font-medium transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="min-h-[80vh] bg-gray-50 py-6">
        <Component {...pageProps} />
      </main>
      <footer className="text-center text-gray-400 py-4 text-sm bg-white border-t">© 2024 Next.js Demo. All rights reserved.</footer>
    </>
  );
}
