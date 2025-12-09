import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className='bg-gray-200 min-h-screen'>
     <Navbar openCart={openCart}/>
     <ProductList />
     {
      isCartOpen && (
        <CartModal cartItems={cartItems}  closeCart={closeCart}/>
      )
     }
    </div>
  )
}

export default App
