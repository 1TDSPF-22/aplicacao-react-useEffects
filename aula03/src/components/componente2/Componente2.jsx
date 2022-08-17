import React from "react";

export default function Componente2(props) {
	return (
		<div>
			<div>
				<h2>Children de componente1</h2>
				{props.children[0]}
				{props.children[1]}
			</div>
		</div>
	);
}
