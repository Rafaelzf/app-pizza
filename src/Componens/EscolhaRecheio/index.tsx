import React from "react";
import firebase from "../../Database/conection";

import "materialize-css/dist/css/materialize.min.css";

export const EscolhaRecheio: React.FunctionComponent = () => {
	firebase
		.database()
		.ref("Borda")
		.on("value", (snapshot: any) => {
			console.log(snapshot.val()[1]);
		});

	return (
		<>
			<h1>Component Recheio</h1>
		</>
	);
};
