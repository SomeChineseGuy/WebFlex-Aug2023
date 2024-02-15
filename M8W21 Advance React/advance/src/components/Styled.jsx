import React, { useContext, useEffect, useState } from "react";
import CounterContext from "./context/CounterContext";

const Styled = () => {
  const {counter} = useContext(CounterContext)

  
  const [position, setPosition ] = useState({
    x: 0,
    y:0
  })

  const [color, setColor] = useState("")

  const handleChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  }

  const moustHandle = (event) => {
    setPosition({
      x: event.x,
      y: event.y
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', moustHandle);
  }, [])

  document.removeEventListener('mousemove', moustHandle);

  // window.localStorage.setItem("newUserId", 1)

  const style = {
    fontSize: `${position.y / 5}px`,
    textAlign: 'center',
    color: `rgb(0, ${position.x / 4}, ${position.y / 4})`,
    backgroundColor: `rgb(${position.x / 4}, ${position.y / 4}, 0)`,
    padding: '10px',
    border: `10px dotted rgb(${position.x / 4},0, ${position.y / 4}`
  }
  

  const message = position.y < 550 ? 'And Dr. Dre said...' : "Nothing you idiots! Dr. Dre is dead, he's locked in my basement! ";

  return (
    <div>
      <h1>Counter {counter}</h1>
      <h1 style={style}>{message}</h1>
      <input type="text" onChange={handleChange} />
    </div>
  )
};

export default Styled;


/*
  Styled()
  document.removeEventListener('mousemove', moustHandle)
  document.addEventListener('mousemove', moustHandle)
    Styled()
  document.removeEventListener('mousemove', moustHandle)
  document.addEventListener('mousemove', moustHandle)
    Styled()
  document.removeEventListener('mousemove', moustHandle)
  document.addEventListener('mousemove', moustHandle)
    Styled()
  document.removeEventListener('mousemove', moustHandle)
  document.addEventListener('mousemove', moustHandle)
    Styled()
  document.removeEventListener('mousemove', moustHandle)
  document.addEventListener('mousemove', moustHandle)
*/