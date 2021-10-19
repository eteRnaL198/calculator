import React, {useState} from "react";

const Input = ({inputValue}) => {
  const handleChange = () => {
    // console.log(inputValue)
  }

  return (
    <>
      <input className="input" type="text" value={inputValue} onChange={handleChange} />
    </>
  )
}

export default Input;