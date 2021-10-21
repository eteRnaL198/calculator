const Button = ({num, inputValue, setInputValue}) => {

  const handleClick = () => {
    let temp;
    if(num === "+" || num === "-" || num === "×" || num === "÷" ||num === "="){
      temp = inputValue + " " + num + " ";  //記号なら、半角スペースをつける
    }else{
      temp = inputValue + num;  
    }

    setInputValue(temp)

    if(temp.split(" ").length > 3 ){ //スペースで演算子があるかを確認

      console.log(temp.split(" "))
      let temp2 = temp.split(" ")

      console.log("非演算子1: "+ Number(temp2[0]))
      console.log("非演算子2: "+ Number(temp2[2]))
      console.log("演算子: " + temp2[1] + " と " +num)

      let temp3;

      for(let i =0; i < temp2.length; i++) {
      console.log("temp2["+i+"]" + " = " + temp2[i])
      }

       if(temp2[1] === "+" && temp2[2] !== "") {temp3 = Number(temp2[0]) + Number(temp2[2])} else 
       if(temp2[1] === "-" && temp2[2] !== "") {temp3 = Number(temp2[0]) - Number(temp2[2])} else
       if(temp2[1] === "×" && temp2[2] !== "") {temp3 = Number(temp2[0]) * Number(temp2[2])} else
       if(temp2[1] === "÷" && temp2[2] !== "") {temp3 = Number(temp2[0]) / Number(temp2[2])} else {
        temp3 = Number(temp2[0])
       }
       

       if(num === "="){
        setInputValue( String(temp3))

       }else{
        setInputValue( String(temp3) + " " + num + " ")

       }

    }


    if(num === "="){
      //  if(inputValue.split("÷").length === 2) {
      //    const [a, b] = inputValue.split("÷") 
      //    setInputValue(parseInt(a, 10) / parseInt(b, 10))
      //  } 
    }
  }

  return (
    <>
      <button className="num_button" onClick={handleClick}>{num}</button>
    </>
  )
}

export default Button;