import './App.css'
import Card from "./components/Card.jsx";
import Interval from "./components/Interval.jsx";

function App() {
  return (
    <div className='app'>
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='line'>
        <Interval/>
      </div>
      <div className='line'>
        <Card title='Card 1' green>Body</Card>
        <Card title='Card 1' blue>Body</Card>
        <Card title='Card 1' purple>Body</Card>
      </div>
    </div>
  )
}

export default App
