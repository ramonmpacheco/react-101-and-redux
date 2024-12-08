import './Mega.css'
import React, { useState } from "react";

const Mega = (props) => {
    const geraNumeroNaoContido = (min, max, array) => {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio)
            ? geraNumeroNaoContido(min, max, array)
            : aleatorio
    }

    const geraNumeros = (qtde) => {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = geraNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const [numeros, setNumeros] = useState(Array(qtde).fill(0))
    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números:</label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtde}
                    onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(geraNumeros(qtde))}>Gerar Números</button>
        </div>
    )

}

export default Mega