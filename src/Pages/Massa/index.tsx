import React, { Suspense, lazy, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container, MainBox } from "./style";
import "materialize-css/dist/css/materialize.min.css";
import ErroBoundary from "../../Componens/ErroBoundary";
import firebase from "../../Database/conection";

const EscolhaMassa = lazy(() =>
	import("../../Componens/EscolhaMassa").then(({ EscolhaMassa }) => ({
		default: EscolhaMassa,
	}))
);

export const Massa: React.FunctionComponent<RouteComponentProps> = () => {
	const [infoMassas, setCount] = useState<any>([]);

	useEffect(() => {
		firebase
			.database()
			.ref("Borda")
			.on("value", (snapshot: any) => {
				setCount("v");
			});
	}, []);

	return (
		<Container>
			<ErroBoundary>
				<Suspense
					fallback={
						<div className="progress">
							<div className="indeterminate"></div>
						</div>
					}
				>
					<MainBox>
						<EscolhaMassa massa={infoMassas} />
					</MainBox>
				</Suspense>
			</ErroBoundary>
		</Container>
	);
};
