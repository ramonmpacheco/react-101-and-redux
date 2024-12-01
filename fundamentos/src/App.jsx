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
            <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={10} max={30} />
            </Card>

            <Card titulo="#3 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Segundo componente"
                    subtitulo="legal" />
            </Card>

            <Card titulo="#1 - Primeiro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)

export default app