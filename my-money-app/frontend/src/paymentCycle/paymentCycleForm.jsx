import React, {Component} from "react";
import {Field, reduxForm, formValueSelector} from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import {bindActionCreators} from "redux";
import {init} from "./paymentCycleActions";
import {connect} from "react-redux";
import ItemList from "./itemList";
import Summary from "./summary";

class PaymentCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebits: this.props.debits.map(d => +d.value || 0).reduce(sum),
    }
  }

  render() {
    const {handleSubmit, readOnly, credits, debits} = this.props;
    const {sumOfCredits, sumOfDebits} = this.calculateSummary()
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={labelAndInput} label='Name' cols='12 4' placeholder='Informe o nome'
                 readOnly={readOnly}/>
          <Field name='month' component={labelAndInput} type='number' label='Mês' cols='12 4'
                 placeholder='Informe o mês' readOnly={readOnly}/>
          <Field name='year' component={labelAndInput} type='number' label='Ano' cols='12 4'
                 placeholder='Informe o ano' readOnly={readOnly}/>
          <Summary credit={sumOfCredits} debit={sumOfDebits}/>
          <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos'/>
          <ItemList cols='12 6' list={debits} readOnly={readOnly} showStatus={true} field='debits' legend='Débitos'/>
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

PaymentCycleForm = reduxForm({form: 'paymentCycleForm', destroyOnUnmount: false})(PaymentCycleForm);
const selector = formValueSelector('paymentCycleForm');
const mapStateToProps = state => ({credits: selector(state, 'credits'), debits: selector(state, 'debits')});
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PaymentCycleForm);