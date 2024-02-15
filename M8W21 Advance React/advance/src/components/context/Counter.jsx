import React, {useContext} from "react";
import CounterContext from "./CounterContext";


const Counter = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <p>The count is: {counter}</p>
    </div>
  )
};

export default Counter;
