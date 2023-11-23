import styled from "@emotion/styled";
import React from "react";
import Header from "../Header";
import theme from "../../styles/theme";

const Container = styled.main`
	width: 80vw;
	height: 80vh;
	background-color: ${theme.color.white};
	border: 2px solid ${theme.color.black};
	box-shadow: 0px 5px 8.5px 3px rgba(0, 0, 0, 0.25);
`;

const MainLayout = ({ children }) => {
	return (
		<Container>
			<Header />
			{children}
		</Container>
	);
};

export default MainLayout;
