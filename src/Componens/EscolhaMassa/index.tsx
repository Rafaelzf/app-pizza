import React, { useState, useEffect } from "react";
import { IchooseMassa } from "./types";
import { Link } from "react-router-dom";
import { Title, Text } from "./style";
import "materialize-css/dist/css/materialize.min.css";

export const EscolhaMassa = (props: IchooseMassa) => {
	const [visualKey, setvisualKey] = useState<boolean>(true);
	const { massa } = props;

	const msg = (erro: string) => {
		console.error(erro);
	};

	useEffect(() => {
		if (typeof massa !== "object") {
			setvisualKey(false);
			throw msg("Houve algum erro na leitura do objeto.");
		} else if (massa.length > 0) {
			setvisualKey(false);
		}
	}, [massa]);

	return (
		<>
			{!!visualKey ? (
				<div className="progress red">
					<div className="indeterminate"></div>
				</div>
			) : (
				<>
					<blockquote>
						<Title>Escolha seu tipo de massa.</Title>
					</blockquote>

					<div className="collection ">
						<Link to="#!" className="collection-item">
							<Text>Alvin</Text>
						</Link>

						<a href="#!" className="collection-item active red darken-3 pulse">
							Alvin
						</a>
						<a href="#!" className="collection-item">
							Alvin
						</a>
						<a href="#!" className="collection-item">
							Alvin
						</a>
					</div>
					<Link to="/Massa" className="btn-large pink darken-4 ">
						Próximo
					</Link>
				</>
			)}
		</>
	);
};
