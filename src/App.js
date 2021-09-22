import './styles/App.css';
import { Input, Num } from "./components/index.js"

function App() {
  return (
    <>
      <h1 className="app_title">Calculator</h1>
      <div className="app_content">
        <Input />
        <div className="app_buttonWrapper">
          <div className="app_buttonInner app_buttonInner-num">
            {[...Array(10)].map((_, i) => (
              <Num key={i} num={9-i} />
            ))}
          </div>
          <div className="app_buttonInner app_buttonInner-operator">
            {["÷", "×", "+", "-", "=", "AC"].map((symbol, i) => (
              <Num key={i} num={symbol} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
