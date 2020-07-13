import React from "react";
import { Container, MainBox } from "./style";
import { Header } from "../../Componens/Header";
import { Link } from "react-router-dom";
import { Title, ContainerButtons } from "../css/style";
import pizza from "../../Images/icons8-kawaii-pizza-64.png";

export const End = () => {
	return (
		<Container>
			<MainBox>
				<Header />
				<blockquote>
					<Title>Pedido realizado com sucesso.</Title>
				</blockquote>
				<figure>
					<img src={pizza} alt="pizza" />
				</figure>
				<ContainerButtons>
					<Link to="/" className="btn-large pink darken-4">
						Novo pedido
					</Link>
				</ContainerButtons>
			</MainBox>
		</Container>
	);
};
