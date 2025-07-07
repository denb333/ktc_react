import { useState } from 'react'

// ========IMPORT FOR AFTERNOON, CALCULATOR AND FORM EXERCISE========
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {
  IncrementCounter, InputFieldTracker, ToggleSwitch, Hoverhighlight,
  FormAlert, Keytracker, DoubleCkick, DropdowSelection, CheckBox, SearchItem
} from './afternoon/index'
import Calculator from './homework-calculator/calculator'
import RegistrationForm from './homework-form/formRegistration'

// ========IMPORT FOR SHOPING CARD========
// import ProductGrid from './components/ProductGrid';
// import CartIcon from './shopping-card/components/CartIcon';
// import './App.module.css'
// import { CartProvider } from './shopping-card/components/CartContext'
// import ProductGrid  from './shopping-card/components/ProductGrid'

import Header from './shopping-card-demo/components/Header/Header';
import ProductGrid from './shopping-card-demo/components/ProductGrid';
import CategoryFilterBar from './shopping-card-demo/components/CategoryFilterBar';
import { CartProvider } from './shopping-card-demo/context/CardContext';
import CartIcon from './shopping-card-demo/components/CartIcon';
import './shopping-card-demo/styles/globals.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Exsercise Afternoon */}
      {/* <IncrementCounter />
      <InputFieldTracker />
      <ToggleSwitch/>
      <Hoverhighlight/>
      <FormAlert/>
      <Keytracker/>
      <DoubleCkick/>
      <DropdowSelection/>
      <CheckBox/>
      <SearchItem/> */}

      {/* Exercise homeword!!!  */}
      {/* <Calculator/> */}
      {/* <RegistrationForm/> */}

      {/* =======shopping card */}
      {/* <CartProvider>
        <div className="app">
          <CartIcon />
          <h1>Thực phẩm khô</h1>
          <ProductGrid />
        </div>
      </CartProvider> */}

      <CartProvider>
        <Header />

        <main style={{ padding: '0 24px' }}>
          <h2 style={{ margin: '24px 0 12px' }}>Thực phẩm khô</h2>
          <CategoryFilterBar />
          <ProductGrid />
          
        </main>
      </CartProvider>
      
    </>
  )
}

export default App
