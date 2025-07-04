import React from 'react';
import { Phone } from 'lucide-react';
import styles from './AppCard.module.css';

type CameraCardProps = {
    name: string;
    avatar: React.ReactNode;
    menuIcon?: React.ReactNode;
};

export default function PhoneCard({
    name,
    avatar,
    menuIcon,
}: CameraCardProps) {
    return (
        <div className={styles.cardPhone}>
            <div className={styles.avatarPhone}>{avatar}</div>
            <div className={styles.profilePhone}>
                
                <div className={styles.infoPhone}>
                    <div className={styles.name}>{name}</div>
                </div>
            </div>
            <div className={styles.phone}>{menuIcon}</div>
        </div>
    );
}