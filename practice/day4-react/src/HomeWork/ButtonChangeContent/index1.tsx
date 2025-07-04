import React from 'react'
import styles from './Button.module.css'

type TabItem = {
    id: string;
    label: string;
    content: string
}
type TagItemProps = {
    items: TabItem[],
    efaultActiveId?: string;
}

export default function index({ items }: TagItemProps) {
    const [activeTab, setActiveTab] = React.useState<string>(items[0].id)
    return (
        <div className={styles.wrapper}>
            <ul className={styles.nav}>
                {items.map((tab) => (
                    <li
                        key={tab.id}
                        className={`${styles.item} ${activeTab === tab.id ? styles.active : ''}`
                        }
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>

            <div className={styles.content}>
                {items.find((t) => t.id === activeTab)?.content}
            </div>
        </div>
    );
}