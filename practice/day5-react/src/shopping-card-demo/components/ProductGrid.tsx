import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import styles from '../styles/ProductGrid.module.css';

const ProductGrid: React.FC = () => (
  <div className={styles.grid}>
    {products.map(p => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
);
export default ProductGrid;