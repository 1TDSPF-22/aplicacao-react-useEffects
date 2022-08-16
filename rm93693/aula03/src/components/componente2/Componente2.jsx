import React from "react";
import Componente1 from "../componente1/Componente1";

export default (props) => {
  return (
    <div>
      <div>
        <h2>Children de componente1</h2>
        {props.children}
      </div>
    </div>
  );
};
