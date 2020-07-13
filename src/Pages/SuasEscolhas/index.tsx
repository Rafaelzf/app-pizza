import React from "react";
import { Container, MainBox } from "../css/style";
import "materialize-css/dist/css/materialize.min.css";
import ErroBoundary from "../../Componens/ErroBoundary";
import { EscolhaSuas } from "../../Componens/EscolhaSuas";
import { Header } from "../../Componens/Header";

export const SuasEscolhas = () => {
	return (
		<Container>
			<MainBox>
				<ErroBoundary>
					<MainBox>
						<Header />
						<EscolhaSuas />
					</MainBox>
				</ErroBoundary>
			</MainBox>
		</Container>
	);
};
