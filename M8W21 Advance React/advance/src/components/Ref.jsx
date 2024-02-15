import React, { useRef, useState } from "react";

const Ref = () => {
  const [input, setInput ] = useState("")
  const inputRef = useRef(null)
  // const handleChange = (event) => {
  //   setInput(event.target.value)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userInput = inputRef.current.value;
    console.log(inputRef.current);
    setInput(userInput)
  }
  return (
    <div>
     
      <h1>Ref</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}/>
        <button>Submit</button>
      </form>
      <p>{input}</p>
    </div>
  )
};

export default Ref;
