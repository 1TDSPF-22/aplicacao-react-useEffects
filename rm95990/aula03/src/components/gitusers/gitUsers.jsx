import React, {useState} from "react";

export default function GitUsers() {

    //const objeto ={
        //nome : "Vinicius",
        //idade : 18,
        //profissao: "Universitario",
        //rm: 95423
    //}

    const [listaUsuarios, setlistaUsuarios] = useState([])

    const carregaLista = async () =>{

        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setlistaUsuarios(data)
        
    }
    
    return(
        <div>
            <h1>GitUsers</h1>

            {/* <h2>Aluno</h2>
            <p>Nome : {objeto.nome}</p>
            <p>Idade : {objeto.idade}</p>
            <p>Profissão : {objeto.profissao}</p>
            <p>Rm: {objeto.rm}</p> */}

            <button onCLICK={()=>carregaLista()}>CARREGAR</button>

            <ul>
                {listaUsuarios.map((usuario)=>
                <li key={usuario.id}>{usuario.login}</li>
                )}
            </ul>

        </div>
    )
}