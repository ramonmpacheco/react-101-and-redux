import React from "react";

const PassoForm = (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo:</label>
            <input
                type="number"
                id="passoInput"
                value={props.passo}
                onChange={e => props.alteraPasso(+e.target.value)} />
        </div>
    )
}

export default PassoForm