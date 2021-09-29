import React, {useState} from "react";

const Input = (value) => {
 
  return (
    <>
      {/* <input className="input" type="text" value="input" /> */}
      <input className="input" type="text" value = {value.index} />
    </>
  )
}

export default Input;