import React from "react";
import { Container, MainBox } from "./style";
import { Header } from "../../Componens/Header";
import { Link } from "react-router-dom";

export const Main = () => {
	return (
		<Container>
			<MainBox>
				<Header />
				<Link to="/Massa" className="btn-large pink darken-4">
					Vamos lá
				</Link>
			</MainBox>
		</Container>
	);
};
