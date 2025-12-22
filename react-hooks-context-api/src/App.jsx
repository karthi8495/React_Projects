import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile'


const john = {
  name: 'John',
  course: 'Devops'
}

const jack = {
  name: 'Jack',
  course: 'FSD - FullStack Development'
}



function App() {
  
  const [user,setUser] = useState(john);
  const toggleuser = () => {
    if(user === john) {
      setUser(jack);
    }else {
      setUser(john);
    }
  }

  return (
    <main>
      <Profile user={user}/>
      <button onClick={toggleuser}>Toggle User</button>
    </main>
  )
}

export default App
