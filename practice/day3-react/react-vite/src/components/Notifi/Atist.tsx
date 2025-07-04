import { EyeOff } from 'lucide-react';
import styles from './Notifi.module.css';

type UserCardProps = {
    avatar: React.ReactNode;
    name: string;
    cardType: React.ReactNode; // Visa/MasterCard logo
    cardNumber: string;
};

export default function UserCard({
    avatar,
    name,
    cardType,
    cardNumber,

}: UserCardProps) {
    return (
        <div className={styles.userCard}>
            <div className={styles.info}>
                <div className={styles.avatar}>{avatar}</div>
                <div className={styles.content}>
                    <div className={styles.userName}>{name}</div>
                    <div className={styles.cardrow}>
                        {cardType}
                        <span>{cardNumber}</span>
                        <div className={styles.icon} >
                            <EyeOff size={18} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
