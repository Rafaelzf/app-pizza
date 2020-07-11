import React from "react";
import { Container, MainBox } from "./style";
import { Header } from "../../Componens/Header";
import { Link } from "react-router-dom";
import { Title, ContainerButtons } from "../css/style";

export const Main = () => {
	return (
		<Container>
			<MainBox>
				<Header />
				<blockquote>
					<Title>Sua pizzaria em forma de aplicativo.</Title>
				</blockquote>
				<ContainerButtons>
					<Link to="/Ofertas" className="btn-large pink darken-4">
						Vamos lá
					</Link>
				</ContainerButtons>
			</MainBox>
		</Container>
	);
};
