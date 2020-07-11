import React, { useState, useEffect } from "react";
import { IchooseMassa } from "../types/types";
import { Link } from "react-router-dom";
import { ComponentButton } from "../Buttons/index";
import { Title, Text, Collection } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";

export const EscolhaTamanho = (props: IchooseMassa) => {
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
						<Title>Escolha o tamanho.</Title>
					</blockquote>
					<Collection className="collection">
						{massa.map((element, index) => {
							return (
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
									<Text>{element}</Text>
								</Link>
							);
						})}
					</Collection>

					<ComponentButton
						home={false}
						destino={"/SuasEscolhas"}
						text={"Próximo"}
					/>
				</>
			)}
		</>
	);
};
