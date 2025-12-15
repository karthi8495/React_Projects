import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal'
import Home from './components/Home'
import Village from './components/Village'
import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const removeFromCart = (productId) =>{
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <nav className='p-4 bg-yellow-500 text-white'>
        <ul className='flex space-x-4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/village">Village</Link></li>
          <li><Link to="/products">Products</Link></li> 
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/village' element={<Village />}></Route>

        <Route path='/products' element={
          <div>
             <Navbar cartCount = {cartItems.length} openCart={openCart}/>
              <ProductList cartItems = { cartItems} setCartItems={setCartItems}/>
                 {
                    isCartOpen && (
                     <CartModal cartItems={cartItems}  closeCart={closeCart} removeFromCart={removeFromCart}/>
                 )
               }
            </div>}></Route>  

      </Routes>

    </Router>

    // <div className='bg-gray-200 min-h-screen'>
    
    // </div>
  )
}

export default App
