import { useState } from "react";

const Counter = () => {
  // const state = useState(100);
  // const getter = state[0]
  // const setter = state[1]
  // console.log(getter);

  // const [getter, setter] = useState(100);
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
  console.log('Function Call!');
  return (
    <div >
      <h1>Counter!</h1>
      <p >The count is: {counter}</p>
      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;