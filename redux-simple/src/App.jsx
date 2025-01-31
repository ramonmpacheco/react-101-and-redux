import './App.css'
import Interval from "./components/Interval.jsx";
import Average from "./components/Average.jsx";
import Sum from "./components/Sum.jsx";
import Raffle from "./components/Raffle.jsx";

function App() {
  return (
    <div className='app'>
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='line'>
        <Interval/>
      </div>
      <div className='line'>
        <Average/>
        <Sum/>
        <Raffle/>
      </div>
    </div>
  )
}

export default App
