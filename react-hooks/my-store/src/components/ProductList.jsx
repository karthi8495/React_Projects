import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function ProductList() {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() =>{
         fetch("https://fakestoreapi.com/products")
            .then( res => res.json())
            .then(data => setProducts(data))
        console.log(products);
    },5000);
   
  },[]);


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
        {products.map((product) => (
            <div key={product.id} className='border border-gray-300 p-4 rounded-lg shadow-lg bg-white'>
                <img src={product.image} alt={product.title} className='h-40 mx-auto mb-4' />
                <h2 className='text-lg font-semibold mb-2'>{product.title}</h2>
                <p className='text-lg text-red-600 font-bold'>${product.price}</p>
                <button className='bg-green-500 text-white w-full py-2 my-2 rounded-full hover:bg-green-600'>Add to Cart</button>
            </div>
        ))}

    </div>
  )
}

export default ProductList