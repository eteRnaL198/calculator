const Button = ({label, inputValue, setInputValue}) => {

  const handleClick = () => {
    setInputValue(inputValue + label)

    const symbols = [];
    const formula = [];
    let startNumIdx = 0;
    const priority = { "÷": 1, "×": 1, "-": 0, "+": 0 }
    if(label === "=") {
      inputValue.split("").forEach((char, idx) => {
        if(char === "+" || char === "-" || char === "×" || char === "÷") {
          formula.push(inputValue.substring(startNumIdx, idx));
          startNumIdx = idx + 1;
          
          while(priority[char] <= priority[symbols[0]] ) {
            formula.push(symbols.shift())
          }
          symbols.unshift(char)
        } else if(idx === inputValue.length-1) {
          formula.push(inputValue.slice(startNumIdx));
        }
      })
      while(symbols.length > 0) {
        formula.push(symbols.shift())
      }
      console.log("formula: ", formula)
    } else if(label === "Delete") {
      setInputValue(inputValue.substring(0, inputValue.length-1));
    }

  }

  return (
    <>
      <button className="button" onClick={handleClick}>{label}</button>
    </>
  )
}

export default Button;