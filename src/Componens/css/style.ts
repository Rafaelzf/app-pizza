import styled from "styled-components";

export const Title = styled.h2`
	font-size: 19px;
	margin: 5px 0px;
	color: #c62828;
`;

export const containerMsg = styled.div`
	display: flex;
`;

export const Text = styled.span`
	color: #880e4f;
`;

export const Collection = styled.div`
	.collection-header {
		font-weight: bold;
	}
	.active {
		background-color: #ffc107 !important;
		span {
			color: #bf360c !important;
		}
	}
	.collection li.collection-item {
		padding: 0px;
	}

	.collection.with-header a.collection-item {
		padding-left: 8px;
	}
`;

export const ContainerCollection = styled.div`
	cursor: pointer;

	a.collection-item {
		color: #880e4f;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.active {
		background-color: #ffc107 !important;
		span,
		i {
			color: #000 !important;
		}
		span.new {
			background-color: #1b5e20 !important;
			color: #fff !important;
		}
	}

	.icon-box {
		display: flex;
		align-items: center;

		i {
			color: #f57c00;
		}
	}

	span.badge.new:after {
		content: "";
	}
	span.badge.new:before {
		content: "Pts. ";
	}
`;

export const ContainerButtons = styled.div`
	.btn-large {
		display: flex;
		justify-content: center;
		margin-bottom: 15px;
		width: 100%;
	}
	.disabled {
		background-color: #dfdfdf !important;
		transition: background 0.8s;
	}
	.pink {
		background-position: center;
		transition: background 0.8s;
		background-color: #4a148c !important;
	}
	.pink:hover {
		background: #6a1b9a radial-gradient(circle, transparent 1%, #6a1b9a 1%)
			center/15000% !important;
	}
	.pink:active {
		background-color: #ce93d8 !important;
		background-size: 100%;
		transition: background 0s;
	}
`;
