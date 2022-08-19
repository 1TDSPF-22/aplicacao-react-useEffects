import React from "react"
import { useState } from "react"


export default function Gitusers(){
    
    // const objeto={
    //     nome : "igor",
    //     idade: "19",
    //     profissao: "Universitário",
    //     rm: 94553
    // }
    
    const [listaUsuarios, setListaUsuarios] = useState([])

    const carregaLista = async() => {
        
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        
        setListaUsuarios(data)

    }

    return(
        <div>
            <h2>GitUsers</h2>
        
        
            {/* <h2>Alunos</h2>
            <p>Nome: {objeto.nome}</p>
            <p>Idade: {objeto.idade}</p>
            <p>Profissão: {objeto.profissao}</p>
            <p>Rm: {objeto.rm}</p> */}
            <button onClick={()=>carregaLista()}>CARREGAR</button>
            
            <ul>
                {listaUsuarios.map((usuario)=>
                <li key={usuario.id}>{usuario.login}</li>
                )}
            </ul>
            
        </div>
    )
}

/*
Exercício
1- Complementar a lista de usuário do GIT com mias dados.
2- Os dados são:
    a- avatar
    b- link do perfil do git
3- Criar uma estrutura de card para cada usuário utilizando css.
*/