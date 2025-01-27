import './Interval.css'
import Card from "./Card.jsx";

export default props => (
  <Card title='Intervalo de Números' red>
    <div className='Interval'>
      <span>
        <strong>Mínimo:</strong>
        <input type='number' value={0}/>
      </span>
      <span>
        <strong>Máximo:</strong>
        <input type='number' value={10}/>
      </span>
    </div>
  </Card>
)