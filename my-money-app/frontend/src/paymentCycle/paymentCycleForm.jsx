import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import labelAndInput from "../common/form/labelAndInput";
import {bindActionCreators} from "redux";
import {init} from "./paymentCycleActions";
import {connect} from "react-redux";

class PaymentCycleForm extends Component {
  render() {
    const {handleSubmit, readOnly} = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={labelAndInput} label='Name' cols='12 4' placeholder='Informe o nome'
                 readOnly={readOnly}/>
          <Field name='month' component={labelAndInput} type='number' label='Mês' cols='12 4'
                 placeholder='Informe o mês' readOnly={readOnly}/>
          <Field name='year' component={labelAndInput} type='number' label='Ano' cols='12 4'
                 placeholder='Informe o ano' readOnly={readOnly}/>
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
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(PaymentCycleForm);