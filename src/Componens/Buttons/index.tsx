import React from "react";
import { IButtons } from "../types/types";
import "materialize-css/dist/css/materialize.min.css";
import { ContainerButtons } from "../css/style";
import { Link, useHistory } from "react-router-dom";
import { setItem } from "../../Helpers/index";

export const ComponentButton = (props: IButtons) => {
	const { home, destino, text, chooses, remetente } = props;

	let history = useHistory();

	const handleClick = () => {
		history.goBack();
	};

	const appendToStorage = () => {
		setItem(remetente, chooses);
	};

	return (
		<>
			{!!home ? (
				<ContainerButtons>
					<Link
						to={destino}
						className="btn-large pink darken-4"
						onClick={appendToStorage}
					>
						Escolher
					</Link>
					<Link to={destino} className="btn-large pink darken-4">
						Não obrigado
					</Link>
				</ContainerButtons>
			) : (
				<ContainerButtons>
					<Link
						to={destino}
						className="btn-large pink darken-4"
						onClick={appendToStorage}
					>
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
