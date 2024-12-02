import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho texto="filho 1" numero={20} bool={true} />
        </div>
    )
}

export default DiretaPai