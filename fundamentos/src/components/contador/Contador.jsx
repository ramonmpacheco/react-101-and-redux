import './Contador.css'
import React, { Component } from "react";
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

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
    alteraPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }
    render() {
        return (
            <div className='Contador'>
                Contador
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} alteraPasso={this.alteraPasso}></PassoForm>
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador