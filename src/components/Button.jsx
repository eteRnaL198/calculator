const Button = ({label, inputValue, setInputValue}) => {

  const handleClick = () => {
    // let temp;
    // if(label === "+" || label === "-" || label === "×" || label === "÷" ||label === "="){
    //   temp = inputValue + " " + label + " ";  //記号なら、半角スペースをつける
    // }else{
    //   temp = inputValue + label;  
    // }

    // setInputValue(temp)

    // if(temp.split(" ").length > 3 ){ //スペースで演算子があるかを確認

    //   console.log(temp.split(" "))
    //   let temp2 = temp.split(" ")

    //   console.log("非演算子1: "+ Number(temp2[0]))
    //   console.log("非演算子2: "+ Number(temp2[2]))
    //   console.log("演算子: " + temp2[1] + " と " +label)

    //   let temp3;

    //   temp2.forEach((val, i) => {
    //     console.log("temp2["+i+"]" + " = " + val)
    //   })

    //   if(temp2[1] === "+" && temp2[2] !== "") {temp3 = Number(temp2[0]) + Number(temp2[2])} else 
    //   if(temp2[1] === "-" && temp2[2] !== "") {temp3 = Number(temp2[0]) - Number(temp2[2])} else
    //   if(temp2[1] === "×" && temp2[2] !== "") {temp3 = Number(temp2[0]) * Number(temp2[2])} else
    //   if(temp2[1] === "÷" && temp2[2] !== "") {temp3 = Number(temp2[0]) / Number(temp2[2])} else {
    //     temp3 = Number(temp2[0])
    //   }
       
    //    if(label === "="){
    //     setInputValue( String(temp3))

    //    }else{
    //     setInputValue( String(temp3) + " " + label + " ")

    //    }

    // }

    // if(label === "="){
      //  if(inputValue.split("÷").length === 2) {
      //    const [a, b] = inputValue.split("÷") 
      //    setInputValue(parseInt(a, 10) / parseInt(b, 10))
      //  } 
    // }

    setInputValue(inputValue + label)

    const symbols = [];
    const formula = [];
    // ÷ × 1 - + descending
    let startNumIdx = 0;
    if(label === "=") {
      inputValue.split("").forEach((char, idx) => {
        if(char === "+" || char === "-" || char === "×" || char === "÷") {
          formula.push(inputValue.substring(startNumIdx, idx));
          startNumIdx = idx + 1;
          
          let i=0;
          while(symbols[i] > char) {
            formula.push(symbols.shift())
            i++
          }
          symbols.push(char)
        } else if(idx === inputValue.length-1) {
          formula.push(inputValue.slice(startNumIdx));
        }
      })
      while(symbols.length > 0) {
        formula.push(symbols.shift())
      }
      console.log("formula: ", formula)
    } else if(label === "AC") {
      setInputValue("");
    }

  }

  return (
    <>
      <button className="button" onClick={handleClick}>{label}</button>
    </>
  )
}

export default Button;