import React from 'react'

export default function Componente2(props) {
    return(
        <div>
            <div>
                <h2>Isso é o exemplo</h2>
                <h2>Childen de Componente1</h2>
                {props.children}
            </div>
        </div>
    )
}