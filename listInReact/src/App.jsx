import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import LibraryDashboard from './LibraryDashboard'

// function App() {
//   const [list, setList] = useState([{
//       title: 'React',
//       url: 'https://reactjs.org/',
//       author:'Jordan Walke',
//       points: 4,
//       id: 1
//     },
//     {
//       title: 'Redux',
//       url: 'https://redux.js.org/',
//       author:'<NAME>,<NAME>',
//       points: 5,
//       id: 2
//     },
//     {
//       title: 'Udacity',
//       url: 'https://www.udacity.com/',
//       author:'<NAME>',
//       points: 5,
//       id: 3
//     }]);
    
//   const addItem = (item) => {
//       setList([...list, item]);
//     }
  
//   return (
//     <div>
//       <h1>My Learning Roadmap</h1>

//       <label htmlFor='search'>Search:</label>
//       <input type="text"  id='search'/>

//       <hr />

//       <ul>
//         {list.map(function (item) {
//           return <li key={item.id}>{item.title}</li>
//         })}
//       </ul>
//       <hr />
//       <h2>React List with and without keys example: </h2>
//       <button onClick={ () => addItem({
//         title: 'JavaScript',
//         url:'https://www.javascript.com/',
//         author:'<NAME>',
//         points:6,
//         id: 4
//       })}>Add JavaScript</button>
//     </div>
//   )
// }


function App() {
  return (
    <LibraryDashboard />
  )
}



export default App
