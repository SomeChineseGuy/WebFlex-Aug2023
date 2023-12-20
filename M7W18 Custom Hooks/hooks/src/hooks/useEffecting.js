import { useEffect, useState } from "react";

const useEffecting = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue ] = useState("")
  console.log('Outside of useEffect');

  useEffect(() => {
    console.log('Inside useEffect');
    setCounter(counter + 1)
  }, [counter])

  const updatetext = (e) => {
    setValue(e.target.value)
  }

  const increment = () => {
    setCounter(counter + 1)
  }

  return {
    value,
    increment,
    counter,
    updatetext
  }
}

export default useEffecting;