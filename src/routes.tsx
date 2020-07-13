import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "./Pages/Main";
import { Ofertas } from "./Pages/Ofertas";
import { Massa } from "./Pages/Massa";
import { Recheio } from "./Pages/Recheio";
import { Tamanho } from "./Pages/Tamanho";
import { Borda } from "./Pages/Borda";
import { SuasEscolhas } from "./Pages/SuasEscolhas";
import { End } from "./Pages/End";

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact={true} component={Main} />
			<Route path="/Ofertas" exact={true} component={Ofertas} />
			<Route path="/Massa" exact={true} component={Massa} />
			<Route path="/Recheio" exact={true} component={Recheio} />
			<Route path="/Tamanho" exact={true} component={Tamanho} />
			<Route path="/Borda" exact={true} component={Borda} />
			<Route path="/SuasEscolhas" exact={true} component={SuasEscolhas} />
			<Route path="/End" exact={true} component={End} />
		</BrowserRouter>
	);
}
