import React, { useState } from "react";
import GitHubBG from "../../assets/img/github-bg.svg";
import "./GitUser.css";

export default function GitUser() {
  // const objeto = {
  //     nome: "Duda",
  //     idade: 18,
  //     profissao: "Universitária",
  //     rm: 95854
  // }

  const [listaUsuarios, setListaUsuarios] = useState([]);

  const carregaLista = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setListaUsuarios(data);
  };

  return (
    <>
      <div>
        <h1>Card de usuário</h1>
        <ul>
          {listaUsuarios.map((usuario) => (
            <div key={usuario.id} className="gituser-card">
              <div className="gituser-img">
                <img src={usuario.avatar_url} alt="avatar" />
              </div>
              <h1>{usuario.login}</h1>
              <a href={usuario.html_url}>{usuario.html_url}</a>
            </div>
          ))}
        </ul>
      </div>

      <button onClick={() => carregaLista()}>Carregar Usuários</button>
    </>
  );
}
//Exercicio
/* 
1 - Complementar a lista de usuários do GIT com mais dados
2 - Os dados são (avatar, link do perfil no git, link do perfil no git )
3 - Crie uma estrutura de card para cada usuário utilizando css
*/
