import React, {useState} from "react";


export default function Relogio(){

    const [relogio, setRelogio] = useState(new Date().toLocaleDateString())

    setTimeout(() => {
        setRelogio(new Date().toLocaleTimeString())
    }, 1000)

    return(
        <div>
            <h2>Time: {relogio} </h2>
        </div>
    )
}