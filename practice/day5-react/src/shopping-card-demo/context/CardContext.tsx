import React, { createContext, useContext, useState } from 'react';
import type { Product } from '../types/Product';

interface CartItem {
  product: Product;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  add: (product: Product, amount?: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (product: Product, amount = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(ci => ci.product.id === product.id);
      if (idx !== -1) {
        const clone = [...prev];
        clone[idx].qty += amount;
        return clone;
      }
      return [...prev, { product, qty: amount }];
    });
  };

  const increase = (id: number) => add({} as Product, 0); // will override below
  const decrease = (id: number) => {
    setItems(prev => {
      const idx = prev.findIndex(ci => ci.product.id === id);
      if (idx === -1) return prev;
      const clone = [...prev];
      clone[idx].qty -= 1;
      if (clone[idx].qty <= 0) clone.splice(idx, 1);
      return clone;
    });
  };

  const remove = (id: number) => setItems(prev => prev.filter(ci => ci.product.id !== id));

  // derive totals
  const totalItems = items.reduce((sum, ci) => sum + ci.qty, 0);
  const totalPrice = items.reduce((sum, ci) => sum + ci.qty * ci.product.price, 0);

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, add, increase, decrease, remove }}>
      {children}
    </CartContext.Provider>
  );
};