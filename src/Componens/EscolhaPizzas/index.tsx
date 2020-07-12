import React, { useState, useEffect } from "react";
import { IOfertas, IDados } from "../types/types";
import "materialize-css/dist/css/materialize.min.css";
import { ContainerCollection, Title } from "../css/style";
import { ComponentButton } from "../Buttons/index";

export const EscolhaPizzas = (props: IOfertas) => {
	const [visualKey, setvisualKey] = useState<boolean>(true);
	const [visualButton, setvisualButton] = useState<boolean>(true);
	const [infoPizzas, setinfoPizzas] = useState<IDados[]>([
		{
			key: "",
			nome: "",
			valor: "",
		},
	]);
	const [chooses, setchooses] = useState<object>();

	const { dados } = props;

	const msg = (erro: string) => {
		console.error(erro);
	};

	useEffect(() => {
		if (typeof dados !== "object") {
			setvisualKey(false);
			throw msg("Houve algum erro na leitura do objeto.");
		} else if (dados.length > 0) {
			setinfoPizzas(dados);
		}
	}, [dados]);

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
		let elementId: any = parseInt(e.currentTarget.id);
		elementId = parseInt(elementId);

		if (!!e.currentTarget.parentElement?.childNodes.length) {
			for (
				let i = 0;
				i < e.currentTarget.parentElement?.childNodes.length;
				i++
			) {
				if (i !== elementId) {
					e.currentTarget.parentElement
						.getElementsByTagName("a")
						.item(i)
						?.classList.remove("active");
				} else {
					e.currentTarget.parentElement
						.getElementsByTagName("a")
						.item(i)
						?.classList.toggle("active");
				}
			}
		}

		const pizzaDoDia = [
			{
				pizza: value.nome,
				pontos: value.valor,
			},
		];

		setchooses(pizzaDoDia);
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
						<Title>Pizzas do dia</Title>
						<p>Escolha uma das pizzas e receba pontos.</p>
					</blockquote>
					<ContainerCollection className="collection">
						{infoPizzas.map((element, index) => {
							return (
								<a
									href="#!"
									className="collection-item"
									onClick={(
										e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
									) => action(e, element)}
									id={index}
								>
									<span className="icon-box">
										<i className="Tiny material-icons">local_pizza</i>
										{element.nome}
									</span>
									<span className="new badge  green accent-4">
										{element.valor}
									</span>
								</a>
							);
						})}
					</ContainerCollection>

					<ComponentButton
						home={true}
						destino={"/Massa"}
						remetente={"pizzas"}
						chooses={chooses}
						disabled={visualButton}
					/>
				</>
			)}
		</>
	);
};
