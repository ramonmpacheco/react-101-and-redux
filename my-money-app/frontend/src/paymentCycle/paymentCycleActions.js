import axios from 'axios'
import {toastr} from "react-redux-toastr";
import {reset as resetForm, initialize} from 'redux-form'
import {selectTab, showTabs} from "../common/tab/tabActions";
import paymentCycle from "./paymentCycle";

const BASE_URL = 'http://localhost:3003/api/paymentCycle';
const INITIAL_VALUES = {}

export function getList() {
  const request = axios.get(BASE_URL);
  return {
    type: 'PAYMENT_CYCLE_FETCHED',
    payload: request
  }
}

export function create(values) {
  return submit(values, 'post');
}

export function update(values) {
  return submit(values, 'put');
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : '';
    axios[method](`${BASE_URL}/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizado com sucesso.');
        dispatch(init())
      })
      .catch(err => {
        err.response.data.errors.forEach(error => toastr.error("Erro", error));
      })
  }
}

export function showUpdate(paymentCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('paymentCycleForm', paymentCycle),
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('paymentCycleForm', INITIAL_VALUES),
  ]
}
