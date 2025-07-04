import { MoreHorizontal } from 'lucide-react';
import styles from './Notifi.module.css';

type Tag = {
  label: string;
  color: string;        
};

type ServiceCardProps = {
  tags: Tag[];            
  title: string;
  subtitle: string;
  progress: number;      
  menuIcon?: React.ReactNode;
};

export default function ServiceCard({
  tags,
  title,
  subtitle,
  progress,
  menuIcon = <MoreHorizontal size={18} />,
}: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      
      <div className={styles.header}>
        <div className={styles.tags}>
          {tags.map((t) => (
            <span
            //   key={t.label}
              className={styles.tag}
              style={{ background: t.color }}
            >
              {t.label}
            </span>
          ))}
        </div>
        <span className={styles.menu}>{menuIcon}</span>
      </div>

      {/* title & subtitle */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>

      {/* progress bar */}
      <div className={styles.progressWrapper}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
        <span className={styles.percent}>{progress}%</span>
      </div>
    </div>
  );
}
