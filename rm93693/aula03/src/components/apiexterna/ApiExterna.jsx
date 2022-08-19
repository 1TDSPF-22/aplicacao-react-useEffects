import React, { useState, useEffect } from "react";

export default () => {
  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    console.log("RENDERIZADO!");
  }, [repositorios]);

  const carregaLista = async () => {
    const resp = await fetch(
      "https://api.github.com/users/alecarlosjesus/repos"
    );
    const data = await resp.json();

    setRepositorios(data);
  };

  return (
    <div>
      <h2>Exemplo de USE-EFFECT</h2>

      <h3>Carregar lista de Repositórios</h3>
      <button onClick={() => carregaLista()}>Carregar</button>

      <ul>
        {repositorios.map((repositorio, i) => (
          <li key={i}>{repositorio.name}</li>
        ))}
      </ul>
    </div>
  );
};
