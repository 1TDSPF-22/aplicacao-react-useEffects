import React from 'react'
import Componente2 from '../componente2/Componente2'

export default function Componente1() {
    return (
    <div>
        <Componente2>
            <p>Props children é o resultado da passagem de elementos JSX por props</p>
        </Componente2>
        </div>
    )
}