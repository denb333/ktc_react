import React from 'react';
import styles from '../styles/CategoryFilterBar.module.css';

const categories = [
  'Gia Vị',
  'Gạo, bún, phở, miến',
  'Đồ hộp, thực phẩm sơ chế đóng gói',
  'Bột các loại',
  'Bánh đa nem, ram',
  'Hạt các loại',
  'Mộc nhĩ, măng, nấm khô',
];

const CategoryFilterBar: React.FC = () => (
  <div className={styles.wrapper}>
    {categories.map((c) => (
      <button key={c} className={styles.tag}>{c}</button>
    ))}
  </div>
);
export default CategoryFilterBar;