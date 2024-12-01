import React from "react";
import If from "./If";

const UsuarioInfo = (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo(a) <strong>{usuario.nome}</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                <div>Seja bem vindo(a) Anônimo</div>
            </If>
        </div>
    )
}

export default UsuarioInfo