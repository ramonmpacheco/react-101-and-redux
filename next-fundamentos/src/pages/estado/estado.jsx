import Layout from "@/components/Layout"
import { useState } from "react"

export default function Estado() {
    const [numero, setNumero] = useState(0)
    function inc() {
        setNumero(n => n + 1)
    }
    return (
        <Layout titulo="Componente com Estado" >
            <div>{numero}</div>
            <button onClick={inc}>Inc</button>
        </Layout>
    )
}