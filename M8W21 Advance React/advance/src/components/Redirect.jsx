import React, { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("/styled")
    },3000)
    
  })

  return (
    <div>
      <h1>LOADING!!!</h1>
    </div>
  )
};

export default Redirect;

/*
app.get
*/