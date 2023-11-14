import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Flex = styled.div<{ fullW?: boolean; fullH?: boolean }>`
	display: flex;
	width: ${({ fullW }) => (fullW ? "100%" : "auto")};
	height: ${({ fullH }) => (fullH ? "100%" : "auto")};
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
