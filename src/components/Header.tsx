"use client";

import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 2px solid ${(props) => props.theme.color.black};
`;

const Header = () => {
	return (
		<Container>
			<Image src="/images/logo_text.png" alt="logo" width={280} height={70} />
		</Container>
	);
};

export default Header;
