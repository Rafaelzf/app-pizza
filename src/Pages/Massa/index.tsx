import React, { useState, useEffect } from "react";
import { Container, MainBox } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";
import ErroBoundary from "../../Componens/ErroBoundary";
import firebase from "../../Database/conection";
import { EscolhaMassa } from "../../Componens/EscolhaMassa";
import { Header } from "../../Componens/Header";

export const Massa = () => {
	const [infoMassas, setCount] = useState<any>([]);
	const [infoM, setinfoM] = useState<any>([]);

	useEffect(() => {
		firebase
			.database()
			.ref("massa")
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
						<EscolhaMassa massa={infoM} />
					</MainBox>
				</ErroBoundary>
			</MainBox>
		</Container>
	);
};
