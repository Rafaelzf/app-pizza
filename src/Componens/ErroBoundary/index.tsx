import React from "react";

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
				<>
					<h1>ErroBoundary</h1>
				</>
			);
		}
		return this.props.children;
	}
}

export default ErroBoundary;
