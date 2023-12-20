import { useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  // const decrement = () => {
  //   setCounter(counter - 1)
  // }

  // const counter = useCounter().counter;
  // const increment = useCounter().increment;
  // const decrement = useCounter().decrement;

  const {counter, increment, decrement} = useCounter();

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p>The count is: {counter}</p>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
      
    </div>
  )
}

export default Counter;