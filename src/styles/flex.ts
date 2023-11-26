import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Flex = styled.div<{
	fullW?: boolean;
	fullH?: boolean;
	gap?: number;
	padding?: number | string;
	margin?: number | string;
	paddingTop?: number;
	paddingBottom?: number;
	paddingLeft?: number;
	paddingRight?: number;
	marginTop?: number;
	marginBottom?: number;
	marginLeft?: number;
	marginRight?: number;
	flex?: number;
	justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
}>`
	display: flex;
	width: ${({ fullW }) => (fullW ? "100%" : "auto")};
	height: ${({ fullH }) => (fullH ? "100%" : "auto")};
	gap: ${({ gap }) => gap}rem;
	padding: ${({ padding }) => (typeof padding === "number" ? `${padding}rem` : padding)};
	margin: ${({ margin }) => (typeof margin === "number" ? `${margin}rem` : margin)};
	padding-top: ${({ paddingTop }) => paddingTop}rem;
	padding-bottom: ${({ paddingBottom }) => paddingBottom}rem;
	padding-left: ${({ paddingLeft }) => paddingLeft}rem;
	padding-right: ${({ paddingRight }) => paddingRight}rem;
	margin-top: ${({ marginTop }) => marginTop}rem;
	margin-bottom: ${({ marginBottom }) => marginBottom}rem;
	margin-left: ${({ marginLeft }) => marginLeft}rem;
	margin-right: ${({ marginRight }) => marginRight}rem;
	flex: ${({ flex }) => flex};
	justify-content: ${({ justifyContent }) => justifyContent};
`;

export const FlexCenterV = styled(Flex)`
	align-items: center;
`;

export const FlexCenterH = styled(Flex)`
	justify-content: center;
`;

export const FlexCenter = styled(Flex)`
	justify-content: center;
	align-items: center;
`;

export const FlexColumn = styled(Flex)`
	flex-direction: column;
`;

export const FlexColumnCenter = styled(FlexColumn)`
	justify-content: center;
	align-items: center;
`;

export const FlexColumnCenterV = styled(FlexColumn)`
	justify-content: center;
`;

export const FlexColumnCenterH = styled(FlexColumn)`
	align-items: center;
`;
