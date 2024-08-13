import React from 'react'
import { useState } from 'react'

function Counter() {

  const[counter,setCounter] = useState(0); 

  return (
   <>
   <div className="container">

    <h1 id='counter'>{counter}</h1>
    <div className="btns">

    <button id='incBtn' onClick={incBtn} className='btn'>Increment</button>
    <button id='decBtn' onClick={decBtn} className='btn'>Decrement</button>
    </div>

    <button id='rstBtn' onClick={rstBtn}>Reset</button>
   </div>
    
   </>
  )

  function incBtn(){
    setCounter(counter+1)
  }
  function decBtn(){
    setCounter(counter-1)
  }

  function rstBtn(){
    setCounter(0);
  }
}

export default Counter