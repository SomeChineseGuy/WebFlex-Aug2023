import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return {
    increment,
    decrement,
    counter,
  }

  // return [counter, increment, decrement]
}

export default useCounter;