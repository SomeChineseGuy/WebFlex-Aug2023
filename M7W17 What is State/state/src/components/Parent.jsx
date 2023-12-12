import React, { useState } from "react";
import Button from "./Button";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>This is the Parent</h1>
      <p>The count is: {counter}</p>
      <Button click={increment} setCounter={setCounter} title="increment"/> 
      <Button click={decrement} setCounter={setCounter} title="decrement"/> 
      {/* {Button({click: increment, title: "Something New", setCounter: setCounter})} */}
    </div>
  )
};

export default Parent;
