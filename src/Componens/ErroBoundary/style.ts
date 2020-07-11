import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const MainBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	strong {
		font-size: 18px;
	}
`;

export const Button = styled.button`
	margin-top: 10px;
	border: 0;
	border-radius: 4px;
	height: 48px;
	font-size: 18px;
	background: #563d7c;
	color: #fff;
	font-style: bold;
	cursor: pointer;
	width: 100%;
`;
