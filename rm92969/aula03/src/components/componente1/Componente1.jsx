import React from 'react'
import Componente2 from '../componente2/Componente2'

export default function Componente1() {
    return(
        <div>
            <Componente2>
                <h2>Isso é o exemplo</h2>
                <p>Props children é o resultado a passagem de elemento JSX por props</p>
            </Componente2>
        </div>
    )
}