import React from "react";
import { IchooseMassa } from "./types";

import "materialize-css/dist/css/materialize.min.css";

export const EscolhaMassa = (props: IchooseMassa) => {
	const { massa } = props;

	if (typeof massa !== "object") {
		console.log("erro");
	}

	return (
		<>
			<h1>Component Massa</h1>
		</>
	);
};
