import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MainBox = styled.div`
	width: 100%;
	max-width: 300px;
	display: flex;
	flex-direction: column;
`;

export const Button = styled.button`
	margin-top: 10px;
	border: 0;
	border-radius: 4px;
	height: 48px;
	font-size: 22px;
	background: #563d7c;
	color: #fff;
	font-style: bold;
	cursor: pointer;

	&:hover {
		background: #4a148c;
	}
`;

export const Title = styled.h2`
	font-size: 15px;
	font-weight: bold;
	margin: 5px 0px;
	color: #c62828;
`;

export const ContainerButtons = styled.div`
	.pink {
		margin-bottom: 15px;
		width: 100%;
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
