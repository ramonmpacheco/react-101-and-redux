import axios from 'axios'
import {toastr} from "react-redux-toastr";
import {reset as resetForm} from 'redux-form'
import {selectTab, showTabs} from "../common/tab/tabActions";

const BASE_URL = 'http://localhost:3003/api/paymentCycle';

export function getList() {
  const request = axios.get(BASE_URL);
  return {
    type: 'PAYMENT_CYCLE_FETCHED',
    payload: request
  }
}

export function create(values) {
  return dispatch => {
    axios.post(BASE_URL, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizado com sucesso.');
        dispatch([
          resetForm('paymentCycleForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ])
      })
      .catch(err => {
        err.response.data.errors.forEach(error => toastr.error("Erro", error));
      })
  }
}

