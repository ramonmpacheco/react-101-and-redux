import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAluno from './components/repeticao/ListaAlunos';
import TabelaProduto from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

const app = () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega></Mega>
            </Card>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#9 - Comunicação direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#8 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo />
            </Card>
            <Card titulo="#7 - Desafio Repetição" color="#FF432E">
                <TabelaProduto />
            </Card>
            <Card titulo="#6 - Repetição" color="#FF4C65">
                <ListaAluno />
            </Card>
            <Card titulo="#5 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="A">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                </Familia>
            </Card>

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