export function updateMin(min) {
  return {
    type: 'NUM_MIN_UPDATE',
    payload: min,
  }
}
export function updateMax(max) {
  return {
    type: 'NUM_MAX_UPDATE',
    payload: max,
  }
}