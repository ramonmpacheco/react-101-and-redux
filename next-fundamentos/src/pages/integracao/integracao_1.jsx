import Layout from "@/components/Layout"
import { useState } from "react"

export default function Integracao() {
    const [cliente, setCliente] = useState({})
    const [clienteId, setClienteId] = useState(1)

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${clienteId}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }

    return (
        <Layout>
            <div>
                <input
                    type="number"
                    value={clienteId}
                    onChange={e => setClienteId(e.target.value)} />
                <button onClick={obterCliente}>Obeter Cliente</button>
            </div>
            <ul>
                <li>id: {cliente?.id ?? 'dado indisponível'}</li>
            </ul>
        </Layout>
    )
}