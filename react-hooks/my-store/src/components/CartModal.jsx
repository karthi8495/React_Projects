import React from 'react'

function CartModal({ closeCart, cartItems, removeFromCart}) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white p-6 rounded-lg w-80 shadow-xl'>
            <h2 className='text-xl font-bold text-indigo-600 mb-4'>Your Cart</h2>
              {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item) => (
                      <div key={item.id} className='flex justify-between items-center mb-2'>
                        <img src={item.image} alt={item.title} className='w-12 h-12' />
                        <div className='text-gray-700'>{item.title}</div>
                        <button onClick={() => removeFromCart(item.id)} className='text-red-500 hover:underline'>Remove</button>

                      </div>
                  ))}

                </div>
              ) : (<p className='text-gray-60'>Your cart is empty.</p>)}
            <button onClick={closeCart} className='mt-4 bg-indigo-500 text-white w-full py-2 rounded-full'>Close</button>
        </div>
    </div>
  )
}

export default CartModal