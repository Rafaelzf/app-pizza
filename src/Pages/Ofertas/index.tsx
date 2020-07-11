import React, { useState, useEffect } from "react";
import { Container, MainBox } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";
import ErroBoundary from "../../Componens/ErroBoundary";
import firebase from "../../Database/conection";
import { EscolhaPizzas } from "../../Componens/EscolhaPizzas";
import { Header } from "../../Componens/Header";

export const Ofertas = () => {
	const [infoMassas, setCount] = useState<any>(undefined);
	const [infoM, setinfoM] = useState<any>([]);

	useEffect(() => {
		firebase
			.database()
			.ref("Pizzas")
			.on("value", (snapshot: any) => {
				const lista: Array<object> = [];

				snapshot.forEach((childItem: any) => {
					lista.push({
						key: childItem.key,
						nome: childItem.val().nome,
						valor: childItem.val().valor,
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
						<EscolhaPizzas dados={infoM} />
					</MainBox>
				</ErroBoundary>
			</MainBox>
		</Container>
	);
};
