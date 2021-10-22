import './styles/App.css';
import { Input, Button } from "./components/index.js"
import React, {useState} from "react";

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <h1 className="app_title">Calculator</h1>
      <div className="app_content">
        <Input inputValue={inputValue}/>
        <div className="app_buttonWrapper">
          <div className="app_buttonInner app_buttonInner-num">
            {[...Array(10)].map((_, i) => (
              <Button key={i} label={(9-i).toString()} inputValue={inputValue} setInputValue={setInputValue}/>
            ))}
          </div>

          <div className="app_buttonInner app_buttonInner-operator">
            {["÷", "×", "+", "-", "=", "AC"].map((symbol, i) => (
              <Button key={i} label={symbol} inputValue={inputValue} setInputValue={setInputValue}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;