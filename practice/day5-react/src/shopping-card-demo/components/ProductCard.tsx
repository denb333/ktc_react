import React from 'react';
import type{ Product } from '../types/Product';
import { useCart } from '../context/CardContext';
import styles from '../styles/ProductCard.module.css';
import { formatPrice } from '../utils/formatPrice';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { items, add, increase, decrease } = useCart();
  const cartItem = items.find(i => i.product.id === product.id);
  const qty = cartItem?.qty ?? 0;

  return (
    <div className={styles.card}>
      {/* optional thumbnail */}
      <img src={product.img} alt={product.name} className={styles.thumb} />

      <h4 className={styles.name}>{product.name}</h4>
      <p className={styles.price}>{formatPrice(product.price)}</p>

      <div className={styles.controls}>
        <button onClick={() => decrease(product.id)} disabled={qty === 0}>−</button>
        <span>{qty}</span>
        <button onClick={() => add(product, 1)}>+</button>
      </div>

      {/* fallback add button when qty === 0 */}
      {qty === 0 && (
        <button className={styles.addBtn} onClick={() => add(product, 1)}>
          Thêm vào giỏ hàng
        </button>
      )}
    </div>
  );
};
export default ProductCard;