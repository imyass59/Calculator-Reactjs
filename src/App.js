import CustomButton from "./components/CustomButton/CustomButton";
import { useState } from "react";

function App() {
  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");
  const digits = [1,2,3,4,5,6,7,8,9,0];
  const symbols = ["/","*","+","-"]

  const updateCalcul = value => setCalc(calc + value) && setResult(eval(calc+value).toString());
  return (
    <div className="App bg-slate-900 w-96">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-slate-200 flex flex-col rounded-md w-96">
          <section id="screen" className="p-6 text-end text-3xl bg-slate-200 break-words">
            <span className="text-lg">({(result || 0)})</span>
            {calc || 0}
          </section>
          <section id="symbol" className="grid grid-cols-5">
            {
              symbols.map((symbol) => <button key={symbol}  onClick={() => updateCalcul(symbol.toString())}><CustomButton params={symbol} Bgcolor="bg-indigo-700" ColorHover="bg-indigo-500" /></button>)
            }
            {
              <button onClick={() => setCalc("") && setResult("")} >
                <CustomButton params="DEL" Bgcolor="bg-indigo-700" ColorHover="bg-indigo-500" />
              </button>
            }
          </section>
          <section id="digit" className="grid grid-cols-3">
            {
              digits.map((digit) => <button key={digit} onClick={()=> updateCalcul(digit.toString())}><CustomButton params={digit} Bgcolor="bg-gray-800" ColorHover="bg-gray-600" /></button>)
            }
            {
              (
                <>
                  <button onClick={()=> updateCalcul(".")}><CustomButton params="." Bgcolor="bg-gray-800" ColorHover="bg-gray-600" /></button>
                  <button><CustomButton params="=" Bgcolor="bg-gray-800" ColorHover="bg-gray-600" /></button>
                </>
              )
            }
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
