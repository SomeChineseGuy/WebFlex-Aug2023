import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const updateText = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: updateText
  }
}

export default useInput;