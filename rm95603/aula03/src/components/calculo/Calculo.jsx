import React, { useState } from 'react';

export default function Calculo(){
    
    const [resultado, setresultado] = useState()

    const soma = ()=>{

        let a = Math.ceil(Math.round(Math.random() * 50))
        let b = Math.floor(Math.round(Math.random() * 100))

        setresultado(a + b)
    }
   
    return(
        <div>
            <h2>{resultado >= 100 ? <span>Voce está na média: {resultado}</span> : <span>Voce precisa 
                estudar mais {resultado}</span> 
            }</h2>
            <button onClick={() => soma()}>SOMA</button>
        </div>
    )
}