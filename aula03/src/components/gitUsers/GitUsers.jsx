import React, { useState } from "react";
import "./GitUser.css";

export default function GitUsers() {
	// const objeto = {
	// 	nome: "Leonardo",
	// 	idade: 24,
	// 	profissao: "Dev",
	// 	rm: 94490,
	// };

	const [listaUsuarios, setListaUsuarios] = useState([]);

	const carregaLista = async () => {
		const response = await fetch("https://api.github.com/users");
		const data = await response.json();

		setListaUsuarios(data);
	};

	// tbm da pra definir uma funcao normal como async:
	// async function carregaLista() {
	// 	const response = await fetch("https://api.github.com/users");
	// 	const data = response.json();

	// 	setListaUsuarios(data);
	// }

	return (
		<>
			<div>GitUsers</div>
			{/* <h1>Aluno</h1>
			<p>Nome: {objeto.nome}</p>
			<p>Idade: {objeto.idade}</p>
			<p>Profissão: {objeto.profissao}</p>
			<p>RM: {objeto.rm}</p> */}

			<button onClick={() => carregaLista()}>Carregar</button>

			<ul className="box">
				{listaUsuarios.map((usuario) => (
					<li key={usuario.id} className="card">
						<p className="username">{usuario.login}</p>
						<img src={usuario.avatar_url} alt="Avatar" />
						<a href={usuario.html_url} target="_blank" rel="noopener noreferrer" className="button">
							Link para o perfil
						</a>
						<p></p>
					</li>
				))}
			</ul>
		</>
	);
}

/* Exercicio:
1 - Complementar a lista de usuários do Git com mais dados.
2 - Os dados são:
	a - Avatar;
	b - Link do perfil no git;
3 - Criar uma estrutura de card para cada usuário utilizando css.
*/
