import React from "react";
import { IButtons } from "../types/types";
import "materialize-css/dist/css/materialize.min.css";
import { ContainerButtons } from "../css/style";
import { Link, useHistory } from "react-router-dom";

export const ComponentButton = (props: IButtons) => {
	const { home, destino, text } = props;

	let history = useHistory();

	const handleClick = () => {
		history.goBack();
	};

	return (
		<>
			{!!home ? (
				<ContainerButtons>
					<Link to={destino} className="btn-large pink darken-4 ">
						Escolher
					</Link>
					<Link to={destino} className="btn-large pink darken-4">
						Não obrigado
					</Link>
				</ContainerButtons>
			) : (
				<ContainerButtons>
					<Link to={destino} className="btn-large pink darken-4 ">
						{text}
					</Link>
					<Link to="" onClick={handleClick} className="btn-large pink darken-4">
						Voltar
					</Link>
				</ContainerButtons>
			)}
		</>
	);
};
