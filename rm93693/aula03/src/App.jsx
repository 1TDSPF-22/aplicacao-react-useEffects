import React from "react";
import ApiExterna from "./components/apiexterna/ApiExterna";
import Calculo from "./components/Calculo";
import Componente1 from "./components/componente1/Componente1";

export default () => {
  return (
    <>
      <h1>Estudo sobre useEffects e props.children</h1>
      <div>
        <h2>Ex: de PROPS-CHILDREN</h2>
        <Componente1 />
        <Calculo />
        <ApiExterna />
      </div>
    </>
  );
};
