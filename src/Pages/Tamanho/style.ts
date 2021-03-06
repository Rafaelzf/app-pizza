import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
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
