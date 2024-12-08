import React from "react";
import alunos from "../../data/alunos";

const ListaAluno = (props) => {
    const alunosLi = alunos.map(aluno => {
        return <li key={aluno.id}>{aluno.id}) {aluno.nome} -: {aluno.nota}</li>
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {alunosLi}
            </ul>
        </div>
    )
}

export default ListaAluno