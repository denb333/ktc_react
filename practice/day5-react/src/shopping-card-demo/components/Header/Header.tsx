import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo';
import CartIcon from '../CartIcon';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Logo />

    <button className={styles.menuBtn}>
      <span className="material-symbols-outlined">menu</span> Danh mục sản phẩm
    </button>

    <input className={styles.searchInput} placeholder="Tìm kiếm sản phẩm …" />

    <CartIcon />
  </header>
);
export default Header;