import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const app = () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo="Segundo componente"
            subtitulo="legal" />
        <Primeiro></Primeiro>
    </div>
)

export default app