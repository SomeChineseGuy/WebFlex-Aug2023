import React, {useContext} from "react";
import CounterContext from "./CounterContext";


const InnerChildren  = (props) => {
  const {increment, decrement} = useContext(CounterContext)

  return (
    <div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
};

export default InnerChildren;
