import React from "react";
import Componente2 from "../componente2/Componete2";

export default function Componente1(){

    return(
        <div>
            <Componente2>
            <h2>Isso é um exemplo</h2>
            <p>Props children é o resultado da passagem de elementos JSX por props</p>
            </Componente2>
        </div>
    )
}
