import React, { useState, useEffect } from "react";
import { Container, MainBox } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";
import ErroBoundary from "../../Componens/ErroBoundary";
import firebase from "../../Database/conection";
import { EscolhaRecheio } from "../../Componens/EscolhaRecheio";
import { Header } from "../../Componens/Header";

export const Recheio = () => {
	const [infoMassas, setCount] = useState<any>([]);
	const [infoM, setinfoM] = useState<any>([]);

	useEffect(() => {
		firebase
			.database()
			.ref("recheio")
			.on("value", (snapshot: any) => {
				const lista: Array<object> = [];

				snapshot.forEach((childItem: any) => {
					let result = [];
					let json_data = childItem.toJSON();

					for (let i in json_data) result.push([i, json_data[i]]);

					const tipo = result.length > 4 ? "Salgada" : "Doce";

					result.map((element, index) => {
						return lista.push({
							key: element[0],
							nome: element[1],
							tipo,
						});
					});
				});
				setCount(lista);
			});
	}, []);

	useEffect(() => {
		if (!!infoMassas) {
			setinfoM(infoMassas);
		}
	}, [infoMassas]);

	return (
		<Container>
			<MainBox>
				<ErroBoundary>
					<MainBox>
						<Header />
						<EscolhaRecheio dados={infoM} />
					</MainBox>
				</ErroBoundary>
			</MainBox>
		</Container>
	);
};
