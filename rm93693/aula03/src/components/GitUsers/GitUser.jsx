import React, {useState} from "react"

export default function GitUser(){
    // const objeto = {
    //     nome: "Duda",
    //     idade: 18,
    //     profissao: "Universitária",
    //     rm: 95854
    // }

    const[listaUsuarios, setListaUsuarios] = useState([]);

    const carregaLista = async ()=>{
        const response = await fetch("https://api.github.com/users");
        const data = await response.json()
        setListaUsuarios(data)
    }


    return(
        <>
            <div>
                <h1>GitUsers</h1>
                <ul>
                    {listaUsuarios.map((usuario)=>
                    <li key={usuario.id}>{usuario.login}</li>
                    )}
                </ul>
            </div>

            <button onClick={()=> carregaLista()}>Carregar Usuários</button>
        </>
    )
}
//Exercicio
/* 
1 - Complementar a lista de usuários do GIT com mais dados
2 - Os dados são (avatar, link do perfil no git, link do perfil no git )
3 - Crie uma estrutura de card para cada usuário utilizando css
*/