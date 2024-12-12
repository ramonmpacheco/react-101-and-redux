import './Button.css'
import React from "react";

const Button = (props) => {
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
            {props.label}
        </button>
    )
}

export default Button