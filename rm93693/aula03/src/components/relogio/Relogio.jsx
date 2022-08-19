import React, {useState} from "react"
import { useEffect } from "react"
export default function Relogio(){
    let hora = new Date().toLocaleTimeString()
    const [relogio, setRelogio] = useState(hora)
    setTimeout(() => {
        setRelogio(hora)
    },1000)

    


    return(
        <div>
            <h2>Time: {relogio} </h2>
        </div>
    )
}