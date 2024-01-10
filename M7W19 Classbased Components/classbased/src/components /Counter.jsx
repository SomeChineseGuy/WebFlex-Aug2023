import React, {useState} from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1)

  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <div>
        <p>{props.message}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
};

export default Counter;
