import React, { useState, useEffect } from 'react';

export default function ApiExterna(){

    const [repositorios, setRepositorios] = useState([])

    useEffect( () =>{
        const resp =  fetch("https://api.github.com/users/alecarlosjesus/repos")
        const data =  resp.json()

        setRepositorios(data)

        console.log("RENDERIZADO!")
    }, [repositorios])

    useEffect( () =>{
        console.log('Renderizou!')
        
    }, [repositorios])


    const carregaLista = ansync () => {
        

        setRepositorios(data)
    }

    return(
        <div>

            <h2>EXEMPLO DE USE-EFFECT</h2>

            <h3>Carregar lista de repositórios</h3>
            {/* <button onClick={() => setRepositorios()}>Carregar</button> */}

                <ul>
                    {repositorios.map((repositorio, i)=>
                        <li key={i}>{repositorio.name}</li>
                    )}
                </ul>

        </div>
    )
}