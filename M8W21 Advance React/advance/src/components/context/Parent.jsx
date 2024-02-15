import React, { useState } from "react";
import Children from "./Children";
import Counter from "./Counter";
import CounterContext from "./CounterContext";


const Parent = () => {


  return (
    <div>
      <h1>Parent</h1>
      
        <Counter />
        <Children />
      
    </div>
  )
};

export default Parent;
