import React, {useState} from "react"


export default function GitUsers() {

    /*const objeto ={
        nome:"Duda",
        idade: 18,
        profissao: "Universitária",
        rm: 95854 
    } */

    const [listaUsuarios, setListaUsuarios] = useState ([])

    const carregaLista = async () =>{

        const response = await fetch ("https://api.github.com/users")
        const data = await response.json() 

        setListaUsuarios(data)
    }

    return (
    <div>
            
        <h1>GitUsers</h1>
        
        {/*<h2>Aluno</h2>
        <p>Nome: {objeto.nome}</p>
        <p>Idade: {objeto.idade}</p>
        <p>Profissão: {objeto.profissao}</p>
    <p>Rm: {objeto.rm}</p>*/}

    <button onClick={() => carregaLista ()}>CARREGAR</button>

    <ul>
        {listaUsuarios.map((usuario) =>
            <li>{usuario.login}</li>
        )}
    </ul>
</div>
    
    )
}