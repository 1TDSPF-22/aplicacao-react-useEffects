import React from 'react'
import useState  from 'react'


export default function Relogio(){

    let hora = new Date().toLocaleTimeString()

    const [relogio, setRelogio] = useState(hora)

    setTimeout(() => {
        
        hora = new Date().toLocaleTimeString()
        setRelogio(hora)
    }, 1000);

    return(
        <div>
            <h2>Time : {relogio}</h2>
        </div>
    )
}