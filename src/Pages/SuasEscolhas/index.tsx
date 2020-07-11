import React, { useState, useEffect } from "react";
import { Container, MainBox } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";
import ErroBoundary from "../../Componens/ErroBoundary";
import firebase from "../../Database/conection";
import { EscolhaSuas } from "../../Componens/EscolhaSuas";
import { Header } from "../../Componens/Header";

export const SuasEscolhas = () => {
	const [infoMassas, setCount] = useState<any>([]);
	const [infoM, setinfoM] = useState<any>([]);

	useEffect(() => {
		firebase
			.database()
			.ref("Borda")
			.on("value", (snapshot: any) => {
				setCount(snapshot.val());
			});
	}, []);

	useEffect(() => {
		if (infoMassas.length > 0) {
			const objectFilter = infoMassas.filter((value: any) => {
				let valueItem = "";
				if (typeof value === "string") {
					valueItem = value;
				}
				return valueItem;
			});

			setinfoM(objectFilter);
		}
	}, [infoMassas]);

	return (
		<Container>
			<MainBox>
				<ErroBoundary>
					<MainBox>
						<Header />
						<EscolhaSuas massa={infoM} />
					</MainBox>
				</ErroBoundary>
			</MainBox>
		</Container>
	);
};
