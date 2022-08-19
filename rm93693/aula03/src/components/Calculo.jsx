import React from "react";
import { useState } from "react";

export default () => {
  const [resultado, setReasultado] = useState();

  const soma = () => {
    let a = Math.round(Math.random() * 50);
    let b = Math.round(Math.random() * 1000);

    setReasultado(a + b);
  };

  return (
    <div>
      <h2>
        {resultado >= 100 ? (
          <span> Você está na média: {resultado}</span>
        ) : (
          <span> Você está fora da média: {resultado}</span>
        )}
      </h2>
      <button onClick={() => soma()}>SOMA</button>
    </div>
  );
};
