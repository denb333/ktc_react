import { NavLink } from 'react-router-dom';
import {
  User2,
  LayoutDashboard,
  MapPinned,
  Building2,
  Stethoscope,
  History,
  Settings
} from 'lucide-react';
import styles from './SideBar.module.css';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const menu: MenuItem[] = [
  { label: 'Patients',    icon: <User2 size={18} />,         to: '/patients' },
  { label: 'Overview',    icon: <LayoutDashboard size={18} />, to: '/overview' },
  { label: 'Map',         icon: <MapPinned size={18} />,     to: '/map' },
  { label: 'Departments', icon: <Building2 size={18} />,     to: '/departments' },
  { label: 'Doctors',     icon: <Stethoscope size={18} />,   to: '/doctors' },
  { label: 'History',     icon: <History size={18} />,       to: '/history' },
  { label: 'Settings',    icon: <Settings size={18} />,      to: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}> <span>+</span> H-care</div>

      <nav className={styles.menu}>
        {menu.map(({ label, icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
