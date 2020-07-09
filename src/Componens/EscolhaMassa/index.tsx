import React, { useState, useEffect } from "react";
import { IchooseMassa } from "./types";

import "materialize-css/dist/css/materialize.min.css";

export const EscolhaMassa = (props: IchooseMassa) => {
	const [visualKey, setvisualKey] = useState<boolean>(true);
	const { massa } = props;

	const msg = (erro: string) => {
		console.error(erro);
	};

	useEffect(() => {
		if (typeof massa !== "object") {
			setvisualKey(false);
			throw msg("Houve algum erro na leitura do objeto.");
		} else if (massa.length > 0) {
			setvisualKey(false);
		}
	}, [massa]);

	return (
		<>
			{!!visualKey ? (
				<div className="progress">
					<div className="indeterminate"></div>
				</div>
			) : (
				<h1>Component Massa</h1>
			)}
		</>
	);
};
