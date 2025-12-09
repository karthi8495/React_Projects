import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Componenets no 1
function App() {

  const stories = [
    {
      id:1,
      title:"React Js",
      description:"Description",
      url:"https://react.dev/",
      author:"Jordan Walke",
    },
    {
      id:2,
      title:"Node JS",
      description:"Description",
      url:"https://nodejs.org/en",
      author:"Ryan Dahl",
    }];
  return (
    <>
      <List  list = {stories} name="Karthikeyan" />
    
    </>
  )
}

// Componenets no 2
function List(props) {

  return (
    <div>
      <Item name={props.name} />
      <ul>
        {props.list.map((item) => (
          <li key={item.id}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span> 
          </li>
        ))}
      </ul>
      <span>{props.name}</span>
    </div>
    
  )
}

// Componenets no 3
function Item(props) {
  
  return (
    <div>{props.name}</div>
  )
}

export default App
