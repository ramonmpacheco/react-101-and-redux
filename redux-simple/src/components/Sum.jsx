import Card from "./Card.jsx";
import {connect} from "react-redux";

const Sum = props => (
  <Card title='Soma dos Números' blue>
    <div>
      <span>
        <span>Resultado: </span>
        <strong>{props.max + props.min}</strong>
      </span>
    </div>
  </Card>
)
const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  }
}
export default connect(mapStateToProps)(Sum)
