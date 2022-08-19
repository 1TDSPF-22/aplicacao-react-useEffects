import React from "react";
import Componente2 from "../componente2/Componente2";
export default () => {
  return (
    <div>
      <Componente2>
        <h2>Isso é um exemplo Filho dentro do componente 2</h2>
        <p>
          Props children é o resultado da passagem de elementos JSX por props
        </p>
      </Componente2>
    </div>
  );
};
