import Navegador from "@/components/Navegador";

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap'
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" />
      <Navegador destino="/exemplo" texto="Exemplo" />
      <Navegador destino="/cliente/123" texto="Navegação" cor="crimson" />
      <Navegador destino="/estado" texto="Com Estado" cor="crimson" />
    </div>
  )
}