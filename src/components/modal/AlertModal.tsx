import React from "react";
import Template from "./Template";
import styled from "@emotion/styled";
import { Text } from "../../styles/text";
import useModal from "../../hooks/useModal";

const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	justify-content: space-evenly;
	padding: 1rem;
`;
const Button = styled.button`
	width: 100%;
	height: 3rem;
	border: 2px solid #000;
	background: ${({ theme }) => theme.color.main};
`;

type Props = {
	content: string | React.ReactNode;
};

const AlertModal = ({ content }: Props) => {
	const { closeLastModal } = useModal();

	const onClickConfirmButton = () => {
		closeLastModal();
	};
	return (
		<Template>
			<Content>
				{typeof content === "string" ? <Text>{content}</Text> : content}
				<Button onClick={onClickConfirmButton}>
					<Text>확인</Text>
				</Button>
			</Content>
		</Template>
	);
};

export default AlertModal;
