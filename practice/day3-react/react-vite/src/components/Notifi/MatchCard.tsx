import React from 'react'
import { MoreHorizontal } from 'lucide-react';
import styles from './Notifi.module.css'

type MatchCardProps = {
  minute: number;
  home: string;
  away: string;
  homeFlag: React.ReactNode;   
  awayFlag: React.ReactNode;   
  homeScore: number;
  awayScore: number;
  menuIcon?: React.ReactNode;      
};
export default function MatchCard({
  minute,
  home,
  away,
  homeFlag,
  awayFlag,
  homeScore,
  awayScore,
  menuIcon = <MoreHorizontal size={18} />,
  }:MatchCardProps) {
    
  return (
     <>
     <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.minute}>{minute}′</span>
        <span className={styles.menu}>{menuIcon}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.team}>
          <span>{home}</span>
          <span className={styles.flag}>{homeFlag}</span>
        </div>

        <div className={styles.score}>
          {homeScore} : {awayScore}
        </div>

        <div className={styles.team}>
          <span className={styles.flag}>{awayFlag}</span>
          <span>{away}</span>
        </div>
      </div>
    </div>
     </>
  )
}
