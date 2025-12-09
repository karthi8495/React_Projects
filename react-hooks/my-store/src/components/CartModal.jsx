import React from 'react'

function CartModal({ closeCart }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white p-6 rounded-lg w-80 shadow-xl'>
            <h2 className='text-xl font-bold text-indigo-600 mb-4'>Your Cart</h2>
            <button onClick={closeCart} className='mt-4 bg-indigo-500 text-white w-full py-2 rounded-full'>Close</button>
        </div>
    </div>
  )
}

export default CartModal