import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let firstname = 'Karthikeyan';
  let mentor_name = 'Haripriya';

  let modulename = "React";


  return (
    <>
     <div>
      <h1>Hi,This is Study Group</h1>
      <p def>I am {firstname} Learning MERN Stock Developer and my instructor name is {mentor_name},I am interested in learn {modulename}.</p>
     </div>
    </>
  )
}

export default App
