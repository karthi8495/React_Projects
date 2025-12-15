import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import Home from './pages/Home';


function App() {
  

  return (
    <Router>
      <div className='min-h-screen bg-gray-100'>
          <div className='container mx-auto p-4'>
              <h1 className='text-4xl font-bold text-center my-4'>React HTTP Demo</h1>
             
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreatePost/>} />
                <Route path='/edit/:id' element={<EditPost/>} />
                <Route path='/delete/:id' element={<DeletePost/>} />
              </Routes>
          </div>
      </div>






    </Router>
  )
}

export default App
