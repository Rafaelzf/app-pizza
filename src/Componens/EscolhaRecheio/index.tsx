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
			console.log(infoRecheios);
			setvisualKey(false);
		}
	}, [infoRecheios]);

	const action = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
													action(e);
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

					<ComponentButton home={false} destino={"/Borda"} text={"Próximo"} />
				</>
			)}
		</>
	);
};
