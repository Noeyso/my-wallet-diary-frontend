import styled from "@emotion/styled";

export const Button = styled.button<{ width?: number; full?: boolean; color?: string }>`
	width: ${({ width, full }) => (full ? "100%" : width ? `${width}px` : "auto")};
	height: 3rem;
	border: 2px solid #000;
	background: #ebe2f6;
	cursor: pointer;

	color: #222;
	font-family: Noto Sans;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	white-space: nowrap;
`;
