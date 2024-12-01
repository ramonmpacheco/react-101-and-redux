import React from "react";
import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Ana" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Gustavo" sobrenome="X"></FamiliaMembro>
        </div>
    )
}

export default Familia