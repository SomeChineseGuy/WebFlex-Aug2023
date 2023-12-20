import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
  const [url, setUrl ] = useState("")
  const [isDataHere, setIsDataHere ] = useState(false);
  const [click, setClick ] = useState(true)
  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      console.log(res.data.message);
      setUrl(res.data.message)
      setIsDataHere(true)
    })
  }, [click])

  const getNewPhoto = () => {
    setClick(!click)
  }

  return {
    getNewPhoto,
    url,
    isDataHere
  }
}

export default useData;