import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  
  // let count = 0;

  const [count, setCount] = useState(0);
  const [countBy2,setCountBy2] = useState(0);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    console.log('products fetched from DB');
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
    
  },[]);


  const increment = () => {
    setCount(count+1);
  }
  const incrementByTwo = () => {
    setCountBy2(countBy2 + 2);
  }


  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Count By 2: {countBy2}</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementByTwo}>Increment By 2</button>
      
    </div>
  )
}

export default App
