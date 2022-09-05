import CustomButton from "./components/CustomButton/CustomButton";

function App() {
  const digits = [1,2,3,4,5,6,7,8,9,0,".","="];
  const symbols = ["/","*","+","-","DEL"]
  return (
    <div className="App bg-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-slate-200 flex flex-col rounded-md">
          <section id="screen" className="p-6 text-end text-3xl bg-slate-200">
            <span className="text-lg">({(0)})</span>
            0
          </section>
          <section id="symbol" className="grid grid-cols-5">
            {
              symbols.map((symbol) => <CustomButton key={symbol} params={symbol} Bgcolor="bg-indigo-700" ColorHover="bg-indigo-500" />)
            }
          </section>
          <section id="digit" className="grid grid-cols-3">
            {
              digits.map((digit) => <CustomButton key={digit} params={digit} Bgcolor="bg-gray-800" ColorHover="bg-gray-600" />)
            }
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
