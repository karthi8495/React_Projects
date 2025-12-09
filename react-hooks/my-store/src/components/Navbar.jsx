import React from 'react' 

function Navbar({openCart}) {
  return (
    <nav className='p-4 bg-indigo-500 text-white flex justify-between items-center'>
        <h1 className="text-2xl font-bold">B8-Store</h1>
        <button onClick ={openCart} className='bg-yellow-400 text-black px-4 py-2 rounded-full'>
            Cart: </button>
        
    </nav>
  )
}

export default Navbar