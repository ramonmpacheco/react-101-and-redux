import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {getList} from "./paymentCycleActions";
import {connect} from "react-redux";

class PaymentCycleList extends Component {
  componentDidMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.list || []
    return list.map(pc => (
      <tr key={pc._id}>
        <td>{pc.name}</td>
        <td>{pc.month}</td>
        <td>{pc.year}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
          <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
          </tr>
          </thead>
          <tbody>
          {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({list: state.paymentCycle.list});
const mapDispatchToProps = (dispatch) => bindActionCreators({getList}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PaymentCycleList)