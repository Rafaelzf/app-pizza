import React from "react";
import { Container, Button } from "./style";

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
					<div>
						<i className="large material-icons">sync_problem</i>
						<i className="large material-icons">mood_bad</i>
					</div>
					<blockquote>
						<h4>Houve algum erro ao carregar esta página.</h4>
					</blockquote>
					<Button
						className="btn waves-effect waves-purple"
						onClick={() => window.history.back()}
					>
						Voltar
					</Button>
				</Container>
			);
		}
		return this.props.children;
	}
}

export default ErroBoundary;
