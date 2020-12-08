import React, { useState } from 'react';

function CounterExample() {
  const [count, setCount] = useState(0)
  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }
  function decreaseCount() {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <div> 
      <h1>{count}</h1>
      <button onClick={increaseCount}>Plus</button>
      <button onClick={decreaseCount}>Minus</button>
    </div>
  );
}

export default CounterExample;