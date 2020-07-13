import React, { useState, useEffect } from "react";
import { ComponentButton } from "../Buttons/index";
import { Title } from "../css/style";
import { getItem } from "../../Helpers/storage";
import { IEscolhas } from "../types/types";

import "materialize-css/dist/css/materialize.min.css";
import pizza from "../../Images/pizza-17874446.jpg";

export const EscolhaSuas = () => {
	const [visualKey, setvisualKey] = useState<boolean>(true);
	const [chooses, setchooses] = useState<IEscolhas>();

	useEffect(() => {
		let objectDatas = getItem();
		if (!!objectDatas) {
			setchooses(objectDatas);
		}
	}, []);

	useEffect(() => {
		if (!!chooses) {
			setvisualKey(false);
		}
	}, [chooses]);

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
											<strong>Massa</strong>: {chooses?.massa[0].massa}
										</li>
										<li>
											<ul>
												<li>
													<strong>Recheio</strong>
												</li>

												{chooses?.recheio.map((element, index) => {
													return (
														<li key={index}>
															- <strong>item:</strong> {element.nome} (
															<em>{element.tipo}</em>)
														</li>
													);
												})}
											</ul>
										</li>
										<li>
											<strong>Borda</strong>: {chooses?.borda[0].massa}
										</li>
										<li>
											<strong>Tamanho</strong>: {chooses?.tamanho[0].tamanho}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<ComponentButton home={false} destino={"/End"} text={"Finalizar"} />
				</>
			)}
		</>
	);
};
