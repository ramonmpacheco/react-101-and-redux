import Card from "./Card.jsx";
import {connect} from "react-redux";

const Average = props => {
  const {min, max} = props;
  return (
    <Card title='Média dos Números' green>
      <div>
      <span>
        <span>Resultado: </span>
        <strong>{(max+min) / 2}</strong>
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
export default connect(mapStateToProps)(Average);