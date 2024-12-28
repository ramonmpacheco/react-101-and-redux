import React from "react";
import { useState } from "react";
import AppContext from "./StoreContext";

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

const Store = props => {
    const [state, setState] = useState(initialState)
    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }
    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store