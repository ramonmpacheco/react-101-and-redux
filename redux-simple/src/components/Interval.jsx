import './Interval.css'
import Card from "./Card.jsx";
import {connect} from "react-redux";
import {updateMax, updateMin} from "../store/actions/numbers.js";

const Interval = props => {
  const {min, max} = props;
  return (
    <Card title='Intervalo de Números' red>
      <div className='Interval'>
      <span>
        <strong>Mínimo:</strong>
        <input type='number' value={min} onChange={e => props._updateMin(+e.target.value)} />
      </span>
        <span>
        <strong>Máximo:</strong>
        <input type='number' value={max} onChange={e => props._updateMax(+e.target.value)} />
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
const mapDispatchToProps = dispatch => {
  return {
    _updateMin(val) {
      dispatch(updateMin(val))
    },
    _updateMax(val) {
      dispatch(updateMax(val))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Interval)