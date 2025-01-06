import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

export default function Estatico() {
    const [numero, setNumero] = useState(0)
    useEffect(() => {
        setNumero(Math.random())
    }, [])
    // https://nextjs.org/docs/messages/react-hydration-error
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{numero}</div>
        </Layout>
    )
}

