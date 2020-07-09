import React from "react";
import { Container, MainBox, Button } from "./style";
import logos from "../../Images/logos.svg";
import { RouteComponentProps } from "react-router-dom";

export const Main: React.FunctionComponent<RouteComponentProps> = ({
	history,
}) => {
	return (
		<Container>
			<MainBox>
				<img src={logos} alt="Logo" />
				<Button onClick={() => history.push("/Massa")}>Vamos lá</Button>
			</MainBox>
		</Container>
	);
};
