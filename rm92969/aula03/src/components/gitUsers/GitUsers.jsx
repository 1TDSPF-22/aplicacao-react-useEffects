import React, {useState} from "react";

export default function GitUsers() {

   // const objeto = {
     //    nome : "Duda",
    //     idae: 18,
    //     profissao: "Universitaria",
      //   rm : 95854
   //  }

   const [listaUsuarios, setlistaUsuarios] = useState([])
   
   const carregaLista = async () => {
    
        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        setlistaUsuarios(data)
   }





    return(
        <div>
            <h1>GitUsers</h1>

            {/*<h2>Alunos</h2>
            <p>Nome : {objeto.nome}</p>
            <p>Idade : {objeto.idade}</p>
            <p>Profissão : {objeto.profissao}</p>
            <p>RM : {objeto.rm}</p>*/}

            <button onClick={()=> carregaLista()}>Carregar</button>
            
            <ul style={{listStyle: 'none'}}>
                {listaUsuarios.map((usuario, id)=>
                    <li key={usuario.id}>
                        <figure>
                            <img src="{usuario.avatar_url}" alt="{usuario.login}" title={"Usuário do github :${usuario.login} style={{width: '200px' }}"}/>
                            <figcaption><a href={usuario.html_url}>{usuario.login}</figcaption>
                        </figure>
                        </li>
                    
                )}
            </ul>
        </div>
        
    )
}