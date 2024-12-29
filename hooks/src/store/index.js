const initialState = {
    number: 0,
    user: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'numberMilti7':
            return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        case 'numberInt':
            return { ...state, number: parseInt(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + action.payload.n }
        case 'login':
            return { ...state, user: { name: action.payload.name } }
        default:
            return { ...state }
    }
}

export {
    reducer,
    initialState,
}