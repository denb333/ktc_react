import React from 'react'
import { MoreHorizontal } from 'lucide-react';
import styles from './Notifi.module.css'
type ClubCardProps = {
  
  clubName: string;
  clubLogo: React.ReactNode;   
  menuIcon?: React.ReactNode;      
};
export default function ClubCard({
  
  clubName,
  clubLogo,
  menuIcon = <MoreHorizontal size={18} />,
  }:ClubCardProps) {
    
  return (
     <div className={styles.cardClub}>
      
        <span className={styles.clubLogo}>{clubLogo}</span>

        <span className={styles.clubName}>{clubName}</span>

        <span className={styles.menu}>{menuIcon}</span>
     

    </div>
  )
}
