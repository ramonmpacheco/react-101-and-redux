import {createStore, combineReducers} from 'redux'
import numbers from "./reducers/numbers.js";

const reducers = combineReducers({
  numbers: numbers
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig;