import React, {useState, useEffect} from 'react';

export default function ApiExterna() {
    
    const [repositorios, setRepositorios] = useState([])

    useEffect(async()=>{
        const resp = await fetch("https://api.github.com/users/btwbeatriz/repos")
        const data = await resp.json()

        setRepositorios(data)
        
    }, [])

    useEffect(() => {
        console.log('RENDERIZOU!')
    }, [repositorios])

    //const carregaLista = async () =>{

    //}
    
    return(
        <div>
            <h2>EXEMPLO DE USE-EFFECT</h2>
            <h3>Carregar lista de Repositórios</h3>
            {/*<button onClick={() => setRepositorios()}>Carregar</button>*/}
            
            <ul>
                {repositorios.map((repositorio, i)=>
                <li key={i}>{repositorio.name}</li>
                )}
            </ul>
        
        </div>
    )
}