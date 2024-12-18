import Menu from '../components/layouts/Menu';
import Content from '../components/layouts/Content'
import './App.css'
import React from "react";

const App = (props) => {
    return (
        <div className="App">
            <Menu />
            <Content />
        </div>
    )
}

export default App