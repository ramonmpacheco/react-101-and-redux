import Card from "./Card.jsx";
import {connect} from "react-redux";

const Raffle = props => {
  const {min, max} = props;
  const random = Math.floor(Math.random() * (max - min)) + min;
  return (
    <Card title='Sorteio de um número' purple>
      <div>
      <span>
        <span>Resultado: </span>
        <strong>{random}</strong>
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
export default connect(mapStateToProps)(Raffle)