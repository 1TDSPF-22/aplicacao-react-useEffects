import React from "react"
import ApiExterna from "./components/apiExterna/ApiExterna"
import Calculo from "./components/calculo/Calculo"
import Componente1 from "./components/componente1/Componente1"
import Relogio from "./components/relogio/Relogio"


export default function App() {
    return (
        <div>
            <h1>Estudo sobre useEffects e props.children</h1>
            <div>
                {/* <h2>Ex: de PROPS-CHILDREN</h2>
                <Componente1 /> 
                <h2>Ex: de renderização condicional!</h2>
                <Calculo />*/}
                 Importanndo o componente
                <Relogio/> 
                <ApiExterna />
            </div>
        </div>
    )
}