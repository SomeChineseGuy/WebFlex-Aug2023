import React, { useEffect, useState } from "react";
import axios from 'axios';
import useData from "../hooks/useData";

const Data = () => {
  // const [url, setUrl ] = useState("")
  // const [isDataHere, setIsDataHere ] = useState(false);
  // const [click, setClick ] = useState(true)
  // useEffect(() => {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //   .then((res) => {
  //     console.log(res.data.message);
  //     setUrl(res.data.message)
  //     setIsDataHere(true)
  //   })
  // }, [click])

  // const getNewPhoto = () => {
  //   setClick(!click)
  // }

  const {getNewPhoto, url, isDataHere} = useData()

  return (
    <div>
      <h1>Data</h1>
      {isDataHere && <img src={url} />}
      <button onClick={getNewPhoto}>Click Here!</button>
    </div>
  )
};

export default Data;
