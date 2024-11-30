import "./Card.css"
import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <div className="Title"> {props.titulo} </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card