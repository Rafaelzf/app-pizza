import React, { useState, useEffect } from "react";
import { IchooseMassa } from "../types/types";
import { ComponentButton } from "../Buttons/index";
import { Title } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";
import pizza from "../../Images/pizza-17874446.jpg";

export const EscolhaSuas = (props: IchooseMassa) => {
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
						<Title>Suas escolhas.</Title>
					</blockquote>

					<div className="row">
						<div className="col s12">
							<div className="card">
								<div className="card-image">
									<img src={pizza} alt="pizza" />
								</div>
								<div className="card-content">
									<ul>
										<li>
											<strong>Massa</strong>: xxxxx
										</li>
										<li>
											<strong>Recheio</strong>
											<ul>
												<li>xxxxx</li>
												<li>xxxxx</li>

												<li>xxxxx</li>
											</ul>
										</li>
										<li>
											<strong>Borda</strong>: xxxxx
										</li>
										<li>
											<strong>Tamanho</strong>: xxxxx
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<ComponentButton home={false} destino={"/"} text={"Finalizar"} />
				</>
			)}
		</>
	);
};
