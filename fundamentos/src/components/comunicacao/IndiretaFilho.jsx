import React from "react";

const IndiretaFilho = (props) => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar("X", 10, false)}>
                Fornecer Informações
            </button>
        </div>
    )
}

export default IndiretaFilho