import React from "react";

const Button = (props) => {
  console.log(props.setCounter);
  return (
    <button onClick={props.click}>{props.title}</button>
  )
};

export default Button;
