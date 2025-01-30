import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case 'NUM_MAX_UPDATE':
        return {
          ...state,
          max: action.payload,
        }
      case 'NUM_MIN_UPDATE':
        return {
          ...state,
          min: action.payload,
        }
      default:
        return {
          min: 1,
          max: 10,
        }
    }
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig;