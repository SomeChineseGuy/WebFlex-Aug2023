import React, { useEffect, useState } from "react";
import useEffecting from "../hooks/useEffecting";

const Effect = () => {
    // const [counter, setCounter] = useState(0);
    // const [value, setValue ] = useState("")
    // console.log('Outside of useEffect');

    // useEffect(() => {
    //   console.log('Inside useEffect');
    //   setCounter(counter + 1)
    // }, [value])

    // const updatetext = (e) => {
    //   setValue(e.target.value)
    // }

    // const increment = () => {
    //   setCounter(counter + 1)
    // }

  const {value, counter, increment, updatetext} = useEffecting();
  
  return (
    <div>
      <h1>Effect</h1>
      <p>Amount of Keypress {counter}</p>
      <button onClick={increment}>Increment</button>
      <input type="text" value={value} onChange={updatetext} />
    </div>
  )
};

export default Effect;


// Initial Render ALWAYS run on inital render

// ReRender, it CAN be call on a rerender or you can just say no

// WAtch for update
