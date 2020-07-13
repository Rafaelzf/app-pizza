import React, { useState, useEffect } from "react";
import { IchooseMassa } from "../types/types";
import { Link } from "react-router-dom";
import { ComponentButton } from "../Buttons/index";
import { clickEfect } from "../../Helpers/clickEfect";
import { Title, Text, Collection } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";

export const EscolhaTamanho = (props: IchooseMassa) => {
	const [visualKey, setvisualKey] = useState<boolean>(true);
	const [chooses, setchooses] = useState<object>();
	const [infoPizzas, setinfoPizzas] = useState<string[]>([]);
	const [visualButton, setvisualButton] = useState<boolean>(true);

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
		const massa = [{ tamanho: value }];
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
						<Title>Escolha o tamanho.</Title>
					</blockquote>
					<Collection className="collection">
						{massa.map((element, index) => {
							return (
								<Link
									to="#!"
									className="collection-item"
									key={index}
									id={index}
									data-index-number={index}
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
						chooses={chooses}
						remetente={"tamanho"}
						destino={"/SuasEscolhas"}
						text={"Próximo"}
					/>
				</>
			)}
		</>
	);
};
