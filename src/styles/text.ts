import styled from "@emotion/styled";

export const Text = styled.span`
	color: #222;
	text-align: center;
	font-family: Noto Sans;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 700;
	line-height: 150%; /* 1.875rem */

	-webkit-user-select: none; /* Safari, Chrome 등 */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* 표준 구문 */
`;

export const ErrorMessage = styled(Text)`
	text-align: center;
	font-weight: 400;
	font-size: 0.875rem;
	text-align: start;
	color: ${({ theme }) => theme.color.red};
`;
