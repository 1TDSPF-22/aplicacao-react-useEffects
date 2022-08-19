import React, {useState} from "react";


export default function GitUsers(){

// const objeto ={
//     nome:"Ingrid",
//     idade: 18,
//     profissao: "Universitária",
//     rm: 95396

// }

    const [listaUsuarios, setListaUsuarios] = useState([])

    const carregaLista = async() =>{
        // {Metodo com dupla funcionalidade( get e set)}

        const response = await fetch("https://api.github.com/users") 
        const data = await response.json()
        setListaUsuarios (data)
    
    }

    return(

        <div>
            <h1>GitUsers</h1>

            {/* <h2>Aluno</h2>
            <p>Nome: {objeto.nome}</p>
            <p>Idade: {objeto.idade}</p>
            <p>Profissão: {objeto.profissao}</p>
            <p>Rm: {objeto.rm}</p> */}

            <button onClick={() => carregaLista}>CARREGAR</button>
            
            <ul>
                {listaUsuarios.map((usuario)=>
                    <li key = {usuario.id}>{usuario.login}</li>
                )}
            </ul>

        </div>
    )
}


// Exercicios
// 1- complementar a lista do git com ususarios
//  2- Os dados são:
//     a- avatar
//     b- link do perfil do git
// 3- Criar uma estrutura de card para cada usuario ultilizando o css.