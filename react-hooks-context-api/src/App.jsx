import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile'
import { UserContext, UserContextProvider } from './UserContext'



function App() {
  return (
    <main>
      <UserContextProvider>
          <AppInternal />
      </UserContextProvider>
      
    </main>
  )
}

function AppInternal() {
  const {toggleUser} = useContext(UserContext);
  return (
    <>
     <Profile />
     <button onClick={toggleUser}>Toggle User</button>
    </>
  )
}

export default App
