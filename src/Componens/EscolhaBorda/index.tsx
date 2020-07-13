import React, { useState, useEffect } from "react";
import { IchooseMassa } from "../types/types";
import { Link } from "react-router-dom";
import { clickEfect } from "../../Helpers/clickEfect";
import { ComponentButton } from "../Buttons/index";
import { Title, Text, Collection } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";

export const EscolhaBorda = (props: IchooseMassa) => {
	const [visualKey, setvisualKey] = useState<boolean>(true);
	const [infoPizzas, setinfoPizzas] = useState<string[]>([]);
	const [visualButton, setvisualButton] = useState<boolean>(true);
	const [chooses, setchooses] = useState<object>();

	const { massa } = props;

	const msg = (erro: string) => {
		console.error(erro);
	};

	useEffect(() => {
		if (typeof massa !== "object") {
			setvisualKey(false);
			throw msg("Houve algum erro na leitura do objeto.");
		} else if (massa.length > 0) {
			setinfoPizzas(massa);
		}
	}, [massa]);

	useEffect(() => {
		if (infoPizzas.length > 1) {
			setvisualKey(false);
		}
	}, [infoPizzas]);

	useEffect(() => {
		let chooseBrn = document.querySelector(".active");
		setvisualButton(!chooseBrn);
	}, [chooses]);

	const action = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		value: any
	) => {
		clickEfect(false, e);

		const massa = [{ massa: value }];

		setchooses(massa);
	};

	return (
		<>
			{!!visualKey ? (
				<div className="progress red">
					<div className="indeterminate"></div>
				</div>
			) : (
				<>
					<blockquote>
						<Title>Escolha o tipo de borda.</Title>
					</blockquote>
					<Collection className="collection">
						{massa.map((element, index) => {
							return (
								<Link
									to="#!"
									className="collection-item"
									key={index}
									data-index-number={index}
									id={index}
									onClick={(
										e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
									) => {
										action(e, element);
									}}
								>
									<Text>{element}</Text>
								</Link>
							);
						})}
					</Collection>

					<ComponentButton
						home={false}
						disabled={visualButton}
						remetente={"borda"}
						destino={"/Tamanho"}
						text={"Próximo"}
						chooses={chooses}
					/>
				</>
			)}
		</>
	);
};
