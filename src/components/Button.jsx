const Button = ({label, inputValue, setInputValue}) => {

  const convertInfixIntoRpn = infix => {  // 中置記法 → 逆ポーランド記法 変換
    const rpn = [];
    const symbols = [];
    const priority = { "÷": 1, "×": 1, "-": 0, "+": 0 }
    let startNumIdx = 0;

    infix.split("").forEach((char, idx) => {
      if(char === "+" || char === "-" || char === "×" || char === "÷") {
        rpn.push(infix.substring(startNumIdx, idx));
        startNumIdx = idx + 1;
        
        while(priority[char] <= priority[symbols[0]] ) {
          rpn.push(symbols.shift())
        }
        symbols.unshift(char)
      } else if(idx === infix.length-1) {
        rpn.push(infix.slice(startNumIdx));
      }
    })
    while(symbols.length > 0) {
      rpn.push(symbols.shift())
    }

    return rpn
  }

  const calculate = rpn => {  // 逆ポーランド記法 計算
    const formula = rpn
    formula.forEach((e,idx) => {
      if(e === "÷"){ 
        formula[idx] = parseInt(formula[idx-2]) / parseInt(formula[idx-1])
        formula[idx-1] = "foo"
        formula[idx-2] = "foo"
      } else if(e === "×") {
        formula[idx] = parseInt(formula[idx-2]) * parseInt(formula[idx-1])
        formula[idx-1] = "foo"
        formula[idx-2] = "foo"
      }
    });

    formula.forEach((e,idx) => {
      let temp = idx-2
      if(e === "+"){
        while(formula[temp] === "foo" && temp>0) temp -= 1
        formula[idx] = parseInt(formula[temp]) + parseInt(formula[idx-1])
        formula[temp] = "foo"
        formula[idx-1] = "foo"
      } else if(e === "-"){
        while(formula[temp] === "foo" && temp>0) temp -= 1
        formula[idx] = parseInt(formula[temp]) - parseInt(formula[idx-1])
        formula[temp] = "foo"
        formula[idx-1] = "foo"
      }
    });  

    return formula[formula.length-1]
  }
  
  const handleClick = () => {
    if(label === "=") {
      const formula = convertInfixIntoRpn(inputValue);
      const result = calculate(formula);
      setInputValue(result.toString());
    } else if(label === "Delete") {
      setInputValue(inputValue.substring(0, inputValue.length-1));
    } else {
      setInputValue(inputValue + label)
    }
  }

  return (
    <>
      <button className="button" onClick={handleClick}>{label}</button>
    </>
  )

}

export default Button;

