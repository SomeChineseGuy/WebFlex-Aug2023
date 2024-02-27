"use client"
import axios from "axios";
import React, {useState,useEffect} from "react";

const AboutInfo = () => {
  const [counter, setcounter ] = useState(0);
  const [input, setInput ] = useState("")
  const handleClick = () => {
    axios.post('/api/users', {data: "Hello World"}).then((res) =>{
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      {/* <button onClick={() => setcounter(counter + 1)}>increment</button>
      <button onClick={() => setcounter(counter - 1)}>decrement</button> */}

    
      <input type="text" className="border-2" value={input} onChange={handleChange} />
      <button onClick={handleClick}>submit</button>
    
    </div>
  )
};

export default AboutInfo;
