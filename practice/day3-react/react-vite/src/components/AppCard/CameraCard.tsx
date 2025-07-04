import React from 'react';
import { Camera } from 'lucide-react';
import styles from './AppCard.module.css';

type CameraCardProps = {
    name: String;
    avatar: React.ReactNode;
    profession: String,
    menuIcon?: React.ReactNode
};

export default function CameraCard({
    name,
    avatar,
    profession,
    menuIcon,
}:CameraCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <div className={styles.avatar}>{avatar}</div>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.profession}>{profession}</div>
        </div>
      </div>
      <div className={styles.camera}>{menuIcon}</div>
    </div>
  );
}


