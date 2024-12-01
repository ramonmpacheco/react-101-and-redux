import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

const app = () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#4 - Desafio Aleatório">
                <Aleatorio min={10} max={30} />
            </Card>

            <Card titulo="#3 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Com Parâmetro">
                <ComParametro
                    titulo="Segundo componente"
                    subtitulo="legal" />
            </Card>

            <Card titulo="#1 - Primeiro">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)

export default app