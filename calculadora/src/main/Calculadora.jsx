import Button from '../components/Button';
import Display from '../components/Display';
import './Calculadora.css'
import React, { Component } from "react";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class Calculator extends Component {
    state = { ...initialState }
    clearMemory() {
        this.setState({ ...initialState })
    }
    setOperation(operation) {
        if (this.state.current === 0 && this.state.values[0] !== 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
            return
        }
        const equals = operation === '='
        const currentOperation = this.state.operation
        const values = [...this.state.values]
        try {
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            if (isNaN(values[0]) || !isFinite(values[0])) {
                this.clearMemory()
                return
            }
        } catch (e) {
            values[0] = this.state.values[0]
        }
        values[1] = 0
        this.setState({
            displayValue: values[0],
            operation: equals ? null : operation,
            current: equals ? 0 : 1,
            clearDisplay: !equals,
            values
        })
    }
    addDigit(d) {
        if (d === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + d
        this.setState({ displayValue, clearDisplay: false })
        if (d !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }
    render() {
        const addDigit = d => this.addDigit(d)
        const setOperation = op => this.setOperation(op)
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory()} triple />
                <Button label="/" click={setOperation} operation />
                <Button label="7" click={addDigit} />
                <Button label="8" click={addDigit} />
                <Button label="9" click={addDigit} />
                <Button label="*" click={setOperation} operation />
                <Button label="4" click={addDigit} />
                <Button label="5" click={addDigit} />
                <Button label="6" click={addDigit} />
                <Button label="-" click={setOperation} operation />
                <Button label="1" click={addDigit} />
                <Button label="2" click={addDigit} />
                <Button label="3" click={addDigit} />
                <Button label="+" click={setOperation} operation />
                <Button label="0" click={addDigit} double />
                <Button label="." click={addDigit} />
                <Button label="=" click={setOperation} operation />
            </div>
        )
    }
}

export default Calculator