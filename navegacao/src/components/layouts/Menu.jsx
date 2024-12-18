import './Menu.css'
import React from "react";

const Menu = (props) => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu