import React,{useState} from 'react'

export default function GitUsers() {

    // const objeto ={
    //     nome : "Duda",
    //     idade: 18,
    //     profissao: "Universitária",
    //     rm: 95854
    // }

    const [listaUsuarios, setListaUsuarios] = useState([])

    const carregaLista = async () =>{

        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setListaUsuarios(data)
    }

  return (
    <div>
        <h1>GitUsers</h1>

        {/* <h2>Aluno</h2>
        <p>Nome : {objeto.nome}</p>
        <p>Idade : {objeto.idade}</p>
        <p>Profissão : {objeto.profissao}</p>
        <p>RM : {objeto.rm}</p> */}
        
        <button onClick={()=> carregaLista()}>CARREGAR</button>

        <ul>
            {listaUsuarios.map((usuario)=>
                <li key={usuario.id}>
               {usuario.login}
                                    </li>
            )}
        </ul>

    </div>
  )
}
/*
Exercício
1 - Complementar a lista de usuários do GIT com mais dados.
2 - Os dados são:
    a - avatar
    b - link do perfil no git
3 - Criar uma estrutura de card para cada usuário utilizando css.
*/