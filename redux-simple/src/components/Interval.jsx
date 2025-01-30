import './Interval.css'
import Card from "./Card.jsx";
import {connect} from "react-redux";

const Interval = props => {
  const {min, max} = props;
  return (
    <Card title='Intervalo de Números' red>
      <div className='Interval'>
      <span>
        <strong>Mínimo:</strong>
        <input type='number' value={min}/>
      </span>
        <span>
        <strong>Máximo:</strong>
        <input type='number' value={max}/>
      </span>
      </div>
    </Card>
  )
}
const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  }
}
export default connect(mapStateToProps)(Interval)