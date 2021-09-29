import './styles/App.css';
import { Input, Num } from "./components/index.js"
import React, {useState} from "react";

function App() {

  const [value, setValue] = useState(0) //追加しました

  return (
    <>
      <h1 className="app_title">Calculator</h1>
      <div className="app_content">
        <Input index = {value}/>
        <div className="app_buttonWrapper">
          <div className="app_buttonInner app_buttonInner-num">
            {[...Array(10)].map((_, i) => (
              <Num key={i} num={9-i} setValue = {setValue}/>
            ))}
          </div>

          <div className="app_buttonInner app_buttonInner-operator">
            {["÷", "×", "+", "-", "=", "AC"].map((symbol, i) => (
              <Num key={i} num={symbol} setValue = {setValue}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
