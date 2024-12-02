import React from "react";
import If, {Else} from "./If";

const UsuarioInfo = (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo(a) <strong>{usuario.nome}</strong>
                <Else>
                    Seja bem vindo(a) Anônimo
                </Else>
            </If>
        </div>
    )
}

export default UsuarioInfo