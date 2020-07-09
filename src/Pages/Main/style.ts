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

	a ::hover {
		background-color: #b71c1c;
	}
`;
