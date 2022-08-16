import React, { useState, useEffect } from 'react'

export default function ApiExterna() {

    const [repositorios, setRepositorios] = useState([])

    useEffect(async () => {
        const resp = await fetch("https://api.github.com/users/ViniciusYoda/repos")
        const data = await resp.json()

        setRepositorios(data)

    }, [])

    useEffect(() => {
        console.log('Renderizou!')

    }, [repositorios])

    // const carregaLista = async () => {

    // }

    return (
        <div>

            <h2>Exemplo de use-effect</h2>

            <h3>Carregar lista de Repositórios</h3>
            {/* <button onClick={() => setRepositorios()}>Carregar</button> */}

            <ul>
                {repositorios.map((repositorios, i) => 
                <li key={i}>{repositorios.name}</li>
                )}
            </ul>
            
        </div>
    )
}