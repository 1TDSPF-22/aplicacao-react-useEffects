import React from "react";
import {useState} from "react";

export default function GitUsers(){

    // const objeto ={
    //     nome:"Duda",
    //     idade:18,
    //     profissao:'estudante',
    //     rm: 95854
    // }

    const [listaUsuarios, setlistaUsuarios] = useState([])

    const carregaLista = async () =>{

        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setlistaUsuarios(data)
    }

    return(
        <div>
            <h1>GitUsers</h1>
            {/* // <h2>Aluno</h2>
            // <p>Nome: {objeto.nome}</p>
            // <p>Idade: {objeto.idade}</p>
            // <p>Profissao: {objeto.profissao}</p>
            // <p>RM: {objeto.rm}</p> */}

            <button onClick={()=>carregaLista()}>CARREGAR</button>

            <ul>
                {listaUsuarios.map((usuario)=>
                <li key={usuario.id}>{usuario.login}</li>
                )}
            </ul>
            {/* <p>Nome: {listaUsuarios[0].login}</p> */}


        </div>


            

    )

}