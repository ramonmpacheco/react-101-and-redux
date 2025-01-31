import {NUM_MAX_UPDATE, NUM_MIN_UPDATE} from "./types.js";

export function updateMin(min) {
  return {
    type: NUM_MIN_UPDATE,
    payload: min,
  }
}

export function updateMax(max) {
  return {
    type: NUM_MAX_UPDATE,
    payload: max,
  }
}