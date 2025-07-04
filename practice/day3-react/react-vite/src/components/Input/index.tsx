import { Search } from 'lucide-react';
import styles from './SearchInput.module.css';

export default function SearchInput({
  placeholder,
  value,
  leftIcon = <Search size={18} />, 
  rightIcon,
  rightIconBg = '#f2f2f2',
                         
}: {
  placeholder?: string;
  value?: string;
  leftIcon?: React.ReactNode | null; 
  rightIcon?: React.ReactNode;
  rightIconBg?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.wrapper}>
      {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}

      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
       
      />

      {rightIcon && (
        <span className={styles.rightIcon} style={{ background: rightIconBg }}>
          {rightIcon}
        </span>
      )}
    </div>
  );
}
