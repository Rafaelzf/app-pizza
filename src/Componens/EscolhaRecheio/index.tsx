import React, { useState, useEffect } from "react";
import { IRecheios, IDadosR } from "../types/types";
import { Link } from "react-router-dom";
import { ComponentButton } from "../Buttons/index";
import { Title, Text, Collection } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";

export const EscolhaRecheio = (props: IRecheios) => {
	const [visualKey, setvisualKey] = useState<boolean>(true);
	const [infoRecheios, setinfoRecheios] = useState<IDadosR[]>([
		{
			key: "",
			nome: "",
			tipo: "",
		},
	]);
	const [chooses, setchooses] = useState<object[]>();
	const [visualButton, setvisualButton] = useState<boolean>(true);

	const { dados } = props;

	const msg = (erro: string) => {
		console.error(erro);
	};

	useEffect(() => {
		if (typeof dados !== "object") {
			setvisualKey(false);
			throw msg("Houve algum erro na leitura do objeto.");
		} else if (dados.length > 0) {
			setinfoRecheios(dados);
		}
	}, [dados]);

	useEffect(() => {
		if (infoRecheios.length > 1) {
			setvisualKey(false);
		}
	}, [infoRecheios]);

	useEffect(() => {
		console.log("oi");
		let chooseBrn = document.querySelector(".active");
		setvisualButton(!chooseBrn);
	}, [chooses]);

	const action = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		value: any
	) => {
		let recheios = {
			key: value.key,
			nome: value.nome,
			tipo: value.tipo,
		};
		if (!!chooses) {
			setchooses([...chooses, recheios]);
		} else {
			setchooses([recheios]);
		}

		return e.currentTarget.classList.toggle("active");
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
						<Title>Escolha seu tipo de recheio.</Title>
					</blockquote>
					<Collection>
						<ul className="collection with-header">
							{infoRecheios.map((element: IDadosR, index) => {
								return (
									<>
										{index === 0 ? (
											<li className="collection-header">
												<h6>Doce</h6>
											</li>
										) : (
											index === 4 && (
												<li className="collection-header">
													<h6>Salgada</h6>
												</li>
											)
										)}
										<li className="collection-item">
											<Link
												to="#!"
												className="collection-item"
												key={index}
												data-index-number={index}
												onClick={(
													e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
												) => {
													action(e, element);
												}}
											>
												<Text>{element.nome}</Text>
											</Link>
										</li>
									</>
								);
							})}
						</ul>
					</Collection>

					<ComponentButton
						home={false}
						remetente={"recheio"}
						chooses={chooses}
						disabled={visualButton}
						destino={"/Borda"}
						text={"Próximo"}
					/>
				</>
			)}
		</>
	);
};
