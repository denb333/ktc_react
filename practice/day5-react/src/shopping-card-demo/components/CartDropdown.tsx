import React, { useRef, useEffect } from 'react';
import { useCart } from '../context/CardContext';
import styles from '../styles/CartDropdown.module.css';
import { formatPrice } from '../utils/formatPrice';

interface Props {
  onClose: () => void;
}

const CartDropdown: React.FC<Props> = ({ onClose }) => {
  const { items, totalPrice, remove, add, decrease } = useCart();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  if (items.length === 0)
    return (
      <div ref={ref} className={styles.dropdown}>
        <p>Giỏ hàng trống.</p>
      </div>
    );

  return (
    <div ref={ref} className={styles.dropdown}>
      <ul className={styles.list}>
        {items.map(ci => (
          <li key={ci.product.id} className={styles.item}>
            <button className={styles.remove} onClick={() => remove(ci.product.id)}>
              ❌
            </button>
            {/* <img src={ci.product.img} alt={ci.product.name} /> */}
            <div className={styles.details}>
              <span className={styles.title}>{ci.product.name}</span>
              <small>
                {ci.qty} x {formatPrice(ci.product.price)}
              </small>
            </div>
            <div className={styles.qtyBtns}>
              <button onClick={() => decrease(ci.product.id)}>−</button>
              <span>{ci.qty}</span>
              <button onClick={() => add(ci.product, 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.total}>Tổng cộng: {formatPrice(totalPrice)}</div>
      <button className={styles.viewBtn}>Xem giỏ hàng</button>
    </div>
  );
};
export default CartDropdown;