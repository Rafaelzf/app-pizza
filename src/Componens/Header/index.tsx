import React from "react";
import logos from "../../Images/logos.svg";
import { Link } from "react-router-dom";

export const Header: React.FunctionComponent = () => {
	return (
		<>
			<Link to="/">
				<img src={logos} alt="Logo" />
			</Link>
		</>
	);
};
