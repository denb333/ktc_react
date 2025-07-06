import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './shopping-card/components/CartContext.tsx'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <CartProvider> */}
      <App />
    {/* </CartProvider> */}
  </React.StrictMode>,
)
