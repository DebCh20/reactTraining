import React from 'react'
import { useState } from 'react'
import Button from './Button';

function Increment() {

  let [count, setCount] = useState(1000);
  let val1=50, val2=100;
  return (
    <>
    <div>Increased</div>
    <h3>counter is {count}</h3>

    <Button inc={()=>(setCount(a => a + val1))} val={val1} op={'increment'}></Button>
    <br/>
    <Button inc={()=>(setCount(prevCount => prevCount + val2))} val={val2} op={'increment'}></Button>
    <br/>
    <Button inc={()=>(setCount(prevCount => prevCount - val1))} val={val1} op={'decrement'}></Button>
    <br/>
    <Button inc={()=>(setCount(prevCount => prevCount - val2))} val={val2} op={'decrement'}></Button>
    </>
  )
}

export default Increment