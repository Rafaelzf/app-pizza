import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "./Pages/Main";
import { Massa } from "./Pages/Massa";
import { Recheio } from "./Pages/Recheio";
import { Tamanho } from "./Pages/Tamanho";
import { Borda } from "./Pages/Borda";

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact={true} component={Main} />
			<Route path="/Massa" exact={true} component={Massa} />
			<Route path="/Recheio" exact={true} component={Recheio} />
			<Route path="/Tamanho" exact={true} component={Tamanho} />
			<Route path="/Borda" exact={true} component={Borda} />
		</BrowserRouter>
	);
}
