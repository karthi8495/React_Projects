import { useState, useMemo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount] = useState(1);
  const[message,setMessage] = useState("");

  //slow function that simulate an expensive calculation based on the count

  const slowCalculation = (num) => {
    console.log("Running slow calculation....");
    for(let i=0; i<100000000; i++){}
    return num * 2;

  }

  const calculatedValue = useMemo(() => slowCalculation(count),[count]);

  const fetchMessage = useCallback(() => {
    console.log("Fetching Message...");
    setMessage("Hello from fetchMessage");
  },[]);

  return (
    <div style={{padding: "20px"}}>
      <h1>React useMemo and useCallback Example</h1>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count+1)}>Increase Count</button>
        <p>Calculated Value: {calculatedValue}</p>
      </div>

      <div>
        <h2>Message: {message}</h2>
        <button onClick={fetchMessage}>Fetch Message</button>
      </div>

    </div>
  )
}

export default App
