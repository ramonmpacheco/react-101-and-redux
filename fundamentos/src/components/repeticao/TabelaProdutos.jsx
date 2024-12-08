import './TabelaProdutos.css'
import React from "react";
import produtos from "../../data/produtos";


const TabelaProduto = () => {
    function getLinhas() {
        return produtos.map((produto, index) => {
            return (
                <tr key={produto.id} className={index % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            )
        })
    }
    return (
        <div className="TabelaProduto">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaProduto