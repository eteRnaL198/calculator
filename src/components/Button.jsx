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

      //ここから追加: 掛け算と割り算を先に計算
      formula.forEach((e,idx) => {
        if(e === "÷"){ 
          formula[idx] = parseInt(formula[idx-2]) / parseInt(formula[idx-1])
          formula[idx-1] = "foo"
          formula[idx-2] = "foo"
        } 
        if(e === "×") {
          formula[idx] = parseInt(formula[idx-2]) * parseInt(formula[idx-1])
          formula[idx-1] = "foo"
          formula[idx-2] = "foo"
        }
      });

      //足し算と引き算を計算
      formula.forEach((e,idx) => {
        let temp = idx-2
        if(e === "+"){
          while(formula[temp] === "foo" && temp>0) temp = temp - 1
          formula[idx] = parseInt(formula[temp]) + parseInt(formula[idx-1])
          formula[temp] = "foo"
          formula[idx-1] = "foo"
        }
        if(e === "-"){
          while(formula[temp] === "foo" && temp>0) temp = temp - 1
          formula[idx] = parseInt(formula[temp]) - parseInt(formula[idx-1])
          formula[temp] = "foo"
          formula[idx-1] = "foo"
        }
      });  
      setInputValue(formula[formula.length-1])
      //↑ここまで

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

