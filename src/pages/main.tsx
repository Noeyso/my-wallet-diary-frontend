import styled from "@emotion/styled";
import React from "react";
import { FlexColumnCenter } from "../styles/flex";
import moment from "moment";
import { archivoBlack } from "../styles/fonts/archivoBlack";

const Title = styled.h1`
	color: #000;
	font-family: ${archivoBlack.style.fontFamily};
	font-size: 2.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const Body = styled.section`
	display: flex;
	height: 100%;
	align-items: center;
	gap: 1rem;
`;

const main = () => {
	// 수입/지출 목록 불러오기 (get)

	// 수입/지출 목록 추가하기 (post)

	// 수입/지출 목록 수정하기 (patch)

	// 수입/지출 목록 삭제하기 (delete)

	return (
		<div>
			<Title>{moment().format("YYYY-MM-DD")}</Title>
			<Body>
				<FlexColumnCenter fullH>목록</FlexColumnCenter>
				<FlexColumnCenter fullH>컨트롤러</FlexColumnCenter>
			</Body>
		</div>
	);
};

export default main;
