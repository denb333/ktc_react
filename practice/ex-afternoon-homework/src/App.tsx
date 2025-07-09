import './App.css'
import { Routes, Route } from 'react-router-dom'
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
