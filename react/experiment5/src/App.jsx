import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [count, setCount] = useState(0);

  return (
    <>
      

  
    <div className="container">
      <div className="card">
        <h1>
          React Counter <br /> Application
        </h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Increment (+)
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement (-)
          </button>
        </div>

        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  
    </>
  )
}

export default App
