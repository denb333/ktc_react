import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/pages/Home'
import About from './components/pages/About'
import MainLayout from './components/layouts/MainLayout'
import DashboardLayout from './components/layouts/DashboardLayout'
import Overview from './components/pages/dashboard.tsx/Overview'
import Reports from './components/pages/dashboard.tsx/Report'
import Settings from './components/pages/dashboard.tsx/Setting'
// import Header from './Router-Ex/Layouts/Header'
import HomePage from './Router-Ex/Pages/HomePage'
import BlogPage from './Router-Ex/Pages/BlogPage'
import CategoryPage from './Router-Ex/Pages/CategoryPage'
import ProductPage from './Router-Ex/Pages/ProductPage'
import LoginPage from './Router-Ex/Pages/LoginPage'
import CustomerPage from './Router-Ex/Pages/Customer'
import SideBar from './homework/components/SideBar/SideBar'
import Header from './homework/components/Header/Header'
import PatientsPage from './homework/pages/PatientPage'
import OverviewPage from './homework/pages/OverviewPage'
import MapPage from './homework/pages/MapPage'
import DepartmentPage from './homework/pages/DepartmentPage'
import DoctorPage from './homework/pages/DoctorPage'
import HistoryPage from './homework/pages/HistoryPage'
import SettingPage from './homework/pages/SettingPage'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

        
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />          
            <Route path="reports" element={<Reports />} /> 
            <Route path="settings" element={<Settings />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter> */}
      {/* <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className="flex-1 container mx-auto px-3 py-6">
        <Routes>
        <Route path="/" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        
      </main>
     
    </div> */}


      <div className="layout">
        <SideBar />
        <div className="main">
          <Header />
          <div className="content">
          <Routes>
            <Route path="/" element={<PatientsPage/>} />

            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/departments" element={<DepartmentPage />} />
            <Route path="/doctors" element={<DoctorPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingPage />} />

            {/* 404 fallback */}
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
