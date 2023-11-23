import styled from "@emotion/styled";
import React from "react";
import theme from "../../styles/theme";
import Image from "next/image";
import { FlexCenter } from "../../styles/flex";

const Container = styled.main`
	width: 60vw;
	max-width: 30rem;
	height: 75vh;
	padding: 0 2.5rem 2.5rem 2.5rem;
	background-color: ${theme.color.white};
	border: 2px solid ${theme.color.black};
	box-shadow: 0px 5px 8.5px 3px rgba(0, 0, 0, 0.25);
`;

const SignLayout = ({ children }) => {
	return (
		<Container>
			<FlexCenter fullW>
				<Image src="/images/logo_text.png" alt="logo" width={280} height={70} />
			</FlexCenter>
			<div style={{ height: "90%" }}>{children}</div>
		</Container>
	);
};

export default SignLayout;
