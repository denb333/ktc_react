
import { Link, Outlet } from 'react-router-dom';

const nav = [
  { to: '/', label: 'Employee Management' },

];

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-lg border-b border-blue-800">Employee CRUD</div>
        <nav className="flex-1">
          <ul className="mt-4">
            {nav.map((item) => (
              <li key={item.to} className="mb-2 rounded bg-blue-800">
                <Link to={item.to} className="block px-6 py-2 rounded hover:bg-blue-700 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow flex items-center justify-center text-xl font-bold">Quản lý nhân viên</header>
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow p-6 min-h-[360px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
