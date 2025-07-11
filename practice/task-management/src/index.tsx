import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router'; // sửa lại đúng thư viện
import LoginPage from './pages/LoginPage';
import OurTaskPage from './pages/OurTaskPage';
import type { User } from './types/type';
import AuthContext from './coponents/context';
import MyTaskPage from './pages/MyTaskPage';
import CreateTaskPage from './pages/CreateTaskPage';
import UpdateTaskPage from './pages/UpdateTaskPage';
import Layout from './layouts/layout';

export default function AppRouter() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user) as User);
    }
  }, []);



  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        {/* Navbar cố định */}
        
        {/* Nội dung chính (có padding-top để tránh bị navbar che) */}
        <div className="pt-20 px-4"> {/* pt-20 = padding top khoảng 5rem (~80px) */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route  element={<Layout />}>
              {user && <Route path="/ourtask" element={<OurTaskPage />} />}
              {user && <Route path="/assignee-me" element={<MyTaskPage />} />}
              {user && <Route path="/create-task" element={<CreateTaskPage />} />}
              {user && <Route path="/update-task/:id" element={<UpdateTaskPage />} />}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
