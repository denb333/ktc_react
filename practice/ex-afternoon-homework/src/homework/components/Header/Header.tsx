import styles from './Header.module.css'
import { Bell } from 'lucide-react'
export default function Header() {
    return (
        <header className={styles.header}>
            <input type="text" className={styles.search} placeholder="Search..."></input>
            <div className={styles.right}>
                <Bell size={24} />
                <div className={styles.avt}> 
                </div>
                <span>Emma Kwan</span>
            </div>
        </header>
    )
}