import React,{useState} from 'react'

export default function GitUsers() {

    // const objeto ={
    //     nome : "Bia",
    //     idade: 25,
    //     profissao: "Universitária",
    //     rm: 00000
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

        <ul style={{listStyle: 'none'}}>
            {listaUsuarios.map((usuario)=>
                <li key={usuario.id}>
                    <figure>
                        <img src={usuario.avatar_url} alt={usuario.login} 
                        title={`Usuário do GitHub :$ {usuario.login}`} style={{ width: '200px' }}/>
                        <figcaption><a href={usuario.html_url}>Acessar perfil</a></figcaption>
                    </figure>
               {usuario.login}
                </li>
            )}
        </ul>

    </div>
  )
}