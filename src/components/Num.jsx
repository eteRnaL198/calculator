const Num = ({num, setValue}) => {

  const handleClick = () => {
    setValue(num)
    // console.log(value)
  }

  

  return (
    <>
      <button className="num_button" onClick={handleClick}>{num}</button>
    </>
    
  )
}

export default Num;