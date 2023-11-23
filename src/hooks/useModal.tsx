import React, { useContext } from "react";
import { ModalsDispatchContext } from "../context/ModalsContext";

const useModal = () => {
	const { open, close, closeLast } = useContext(ModalsDispatchContext);

	const openModal = (Component: () => JSX.Element, props?: any) => {
		open(Component, props);
	};
	const closeModal = (Component: () => JSX.Element) => {
		close(Component);
	};

	const closeLastModal = () => {
		closeLast();
	};
	return {
		openModal,
		closeModal,
		closeLastModal,
	};
};
export default useModal;
