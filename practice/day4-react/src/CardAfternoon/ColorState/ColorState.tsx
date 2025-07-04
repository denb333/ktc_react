import React, { useState } from 'react'
import styles from './ColorState.module.css'


export type ColorOption = {
  id: string;
  label: string;
};

type Props = {
  options: ColorOption[];          
  initialId?: string;              
};

export default function ColorPicker({ options, initialId }: Props) {
  const [selected, setSelected] = useState<string>(
    initialId ?? options[0].id     
  );

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Màu:</span>

      {options.map((color) => (
        <button
          key={color.id}
          className={
            selected === color.id
              ? `${styles.btn} ${styles.active}`
              : styles.btn
          }
          onClick={() => setSelected(color.id)}
        >
          {color.label}
        </button>
      ))}
    </div>
  );
}