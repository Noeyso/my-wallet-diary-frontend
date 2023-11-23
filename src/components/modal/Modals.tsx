import React, { useContext, useEffect } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "../../context/ModalsContext";
import styled from "@emotion/styled";

const Dimmed = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: calc(var(--vh, 1vh) * 100);
	background: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const Modals = (props) => {
	const openedModals = useContext(ModalsStateContext);
	const { close, closeLast } = useContext(ModalsDispatchContext);

	const onClickDimmed = (e) => {
		if (e.target === e.currentTarget) {
			closeLast();
		}
	};

	return (
		openedModals.length > 0 && (
			<Dimmed onClick={onClickDimmed}>
				{openedModals.map((modal, index) => {
					const { Component, props } = modal;

					const onClose = () => {
						close(Component);
					};
					const handleSubmit = async () => {
						if (props.onSubmit) {
							await props.onSubmit();
						}
						onClose();
					};

					return <Component key={index} onClose={onClose} handleSubmit={handleSubmit} {...props} />;
				})}
			</Dimmed>
		)
	);
};

export default Modals;
