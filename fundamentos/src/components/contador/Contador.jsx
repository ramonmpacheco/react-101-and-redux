import './Contador.css'
import React, { Component } from "react";

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 1,
        passo: this.props.passoInicial || 1
    }
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    alterarPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }
    render() {
        return (
            <div className='Contador'>
                Contador
                <p>Valor: {this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo:</label>
                    <input
                        type="number"
                        id="passoInput"
                        value={this.state.passo}
                        onChange={this.alterarPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador