import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useReducer } from 'react'

const initialState = {
    number: 0,
    user: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload.name } }
        default:
            return { ...state }
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'login', payload: {name: 'João'} })}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
