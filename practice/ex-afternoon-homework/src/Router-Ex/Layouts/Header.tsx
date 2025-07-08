import { NavLink, Link } from "react-router";
import { ShoppingCart } from "lucide-react"; // `npm i lucide-react`

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/category", label: "Category" },
  { to: "/product", label: "Product" },
  { to: "/login", label: "Login" },
  { to: "/customer", label: "Customer" },
];

export default function Header() {
  return (
    <header style={{backgroundColor: "#ff7800"}} className="bg-orange-600 text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="text-2xl font-extrabold">
          Magazines
        </Link>

        <nav className="hidden md:flex gap-5 items-center">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:underline duration-150 ${
                  isActive ? "text-yellow-300" : "text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <ShoppingCart className="w-5 h-5" />
        </nav>

        {/* mobile menu icon (optional) */}
      </div>
    </header>
  );
}