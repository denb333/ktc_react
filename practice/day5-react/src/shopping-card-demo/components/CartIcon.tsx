import React, { useState } from 'react';
import { useCart } from '../context/CardContext';
import CartDropdown from './CartDropdown';
import styles from '../styles/CardIcon.module.css';

const CartIcon: React.FC = () => {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button className={styles.icon} onClick={() => setOpen(o => !o)}>
        🛒
        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      </button>
      {open && <CartDropdown onClose={() => setOpen(false)} />}
    </div>
  );
};
export default CartIcon;