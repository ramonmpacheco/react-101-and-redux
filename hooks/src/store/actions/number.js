export function numberAdd2(dispatch) {
    dispatch({ type: 'numberAdd2' })
}

export function numberMilti7(dispatch) {
    dispatch({ type: 'numberMilti7' })
}

export function numberDiv25(dispatch) {
    dispatch({ type: 'numberDiv25' })
}

export function numberInt(dispatch) {
    dispatch({ type: 'numberInt' })
}

export function numberAddN(dispatch, n) {
    dispatch({ type: 'numberAddN', payload: { n: n } })
}