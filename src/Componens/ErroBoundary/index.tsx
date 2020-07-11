import React from "react";
import { Container, Button, MainBox } from "./style";

class ErroBoundary extends React.Component {
	readonly state = {
		hasError: false,
	};

	constructor(props: any) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error: any) {
		return {
			hasError: true,
		};
	}

	render() {
		if (this.state.hasError) {
			return (
				<Container>
					<MainBox>
						<div>
							<i className="large material-icons">sync_problem</i>
							<i className="large material-icons">mood_bad</i>
						</div>
						<blockquote>
							<strong>Erro ao carregar esta página.</strong>
						</blockquote>
						<Button
							className="btn waves-effect waves-purple"
							onClick={() => window.history.back()}
						>
							Voltar
						</Button>
					</MainBox>
				</Container>
			);
		}
		return this.props.children;
	}
}

export default ErroBoundary;
