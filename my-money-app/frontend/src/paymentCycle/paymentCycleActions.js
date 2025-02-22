import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api/paymentCycle';

export function getList(){
  const request = axios.get(BASE_URL);
  return {
    type: 'PAYMENT_CYCLE_FETCHED',
    payload: request
  }
}

