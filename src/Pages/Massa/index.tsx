import React, { useState, useEffect } from "react";
import { Container, MainBox } from "./style";
import "materialize-css/dist/css/materialize.min.css";
import ErroBoundary from "../../Componens/ErroBoundary";
import firebase from "../../Database/conection";
import { EscolhaMassa } from "../../Componens/EscolhaMassa";
import { Header } from "../../Componens/Header";

export const Massa = () => {
	const [infoMassas, setCount] = useState<any>([]);
	//snapshot.val()
	useEffect(() => {
		firebase
			.database()
			.ref("Borda")
			.on("value", (snapshot: any) => {
				setCount(snapshot.val());
			});
	}, []);

	return (
		<Container>
			<MainBox>
				<ErroBoundary>
					<MainBox>
						<Header />
						<EscolhaMassa massa={infoMassas} />
					</MainBox>
				</ErroBoundary>
			</MainBox>
		</Container>
	);
};
