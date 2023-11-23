import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import useModal from "../../hooks/useModal";
import { FlexCenter, FlexColumnCenter } from "../../styles/flex";

const Container = styled.div<{ width?: number; height?: number }>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${({ width }) => width || "40vw"};
	height: ${({ height }) => height};
	border: 2px solid ${({ theme }) => theme.color.black};
	background-color: ${({ theme }) => theme.color.white};
	z-index: 2;
`;
const Top = styled.div`
	width: 100%;
	border-bottom: 2px solid #000;
	background: ${({ theme }) => theme.color.gray};
	display: flex;
	justify-content: flex-end;

	.close {
		padding: 0.2rem;
	}
`;

type Props = {
	children: React.ReactNode;
	width?: number;
	height?: number;
};

const Template = ({ width, height, children }: Props) => {
	const { closeLastModal } = useModal();
	return (
		<Container width={width} height={height}>
			<Top>
				<Image
					className="close"
					src={"/images/close.svg"}
					alt="close"
					onClick={closeLastModal}
					width="20"
					height="20"
				/>
			</Top>
			<FlexCenter fullW fullH>
				{children}
			</FlexCenter>
		</Container>
	);
};

export default Template;
