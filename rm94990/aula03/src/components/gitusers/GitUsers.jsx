import React, {useState} from "react";

export default function GitUsers(){

    //const objeto = {
    //    nome: "Pedro Bala",
    //    idade: 19,
    //    profissao: "Cinefilo",
    //    rm: 394797
    //}

    const [listaUsuarios, setListaUsuarios] = useState([])

    const carregaLista = async () => {
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        
        setListaUsuarios(data)

    }

    return (
        <div>
            <h1>GitUsers</h1>

            <button onClick={()=> carregaLista()}> CARREGAR</button>
            {/*<h2>Aluno</h2>
            <p>Nome: {listaUsuarios.nome}</p>
            <p>Idade: {objeto.idade}</p>
            <p>Profissão: {objeto.profissao}</p>
            <p>RM: {objeto.rm}</p>*/}
            <ul>
                {listaUsuarios.map((usuario)=>
                    <li>{usuario.login}</li>
                )}
            </ul>
        </div>
    )
}