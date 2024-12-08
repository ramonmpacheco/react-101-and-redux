import './Input.css'
import React, { useState } from "react";

const Input = (props) => {
    const [valor, setValor] = useState('Inicial')
    const quandoMudar = (e) => setValor(e.target.value)
    return (
        <div className="Input">
            <input value={valor} onChange={quandoMudar} />
            <input value={valor} readOnly />
            <input value={undefined} />
        </div>
    )
}

export default Input