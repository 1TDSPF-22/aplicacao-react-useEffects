import React from "react"
import useState from "react"

export default function GitUsers(){

    //const objeto ={
        //nome: "Bia",
        //idade: 25,
        //profissao: "Universitária",
        //rm: 00000
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

            {/*<h2>Aluno</h2>
            <p>Nome : {objeto.nome}</p>
            <p>Nome : {objeto.idade}</p>
            <p>Nome : {objeto.profissao}</p>
            <p>Nome : {objeto.rm}</p>*/}

        <button onClick={()=> carregaLista()}>CARREGAR</button>

        <ul style={{listStyle: 'none'}}>
            {listaUsuarios.map((usuario)=>
                <li key={usuario.id}>
                <figure> 
                    <img src={usuario.avatar_url} alt={usuario.login} title={`Usuário do GitHub :$ {usuario.login}`} style={{width: '200px'}} />
                    <figcaption><a href={usuario.html_url}>{usuario.login}</a></figcaption>
                </figure>
                </li>
            )}
        </ul>

        </div>
    )
}

/*
Exercicio:
1) Complementar a lista de usuarios do Git com mais dados
2) Os dados são:
    a) avatar
    b) link do perfil no Git
3) Criar uma estrutura de card para cada usuário utilizando css    
*/