import React, { useState } from "react";
import useInput from "../hooks/useInput";

const Input = () => {
  // const [value, setValue] = useState("");
  // const updateText = (e) => {
  //   setValue(e.target.value)
  // }
  console.log(window);

  const inputStuff = useInput()
  return (
    <div>
      <h1>Input</h1>
      <input type="text" {...inputStuff} />
      <p>You just typed: {inputStuff.value} </p>
    </div>
  )
};

export default Input;
