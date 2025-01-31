import {NUM_MAX_UPDATE, NUM_MIN_UPDATE} from "../actions/types.js";

const initialState = {
  min: 1,
  max: 10,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case NUM_MAX_UPDATE:
      return {
        ...state,
        max: action.payload,
      }
    case NUM_MIN_UPDATE:
      return {
        ...state,
        min: action.payload,
      }
    default:
      return state;
  }
}