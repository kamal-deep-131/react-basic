import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0)



  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter == 0) {
      toast.error("Counter is already zero")
      return
    }
    setCounter(counter - 1)
  }

  return (
    <div className="container">
      <h1>Conter App</h1>
      <div className="counter_container">
        <button className='btn' onClick={decrement} >-</button>
        <div className="output">{counter}</div>
        <button className='btn' onClick={increment}>+</button>
      </div>
      <div className="reset_btn">
        <button className="reset" onClick={() => {
          toast.success("Counter Reset")
          setCounter(0)
        }}>Reset</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App