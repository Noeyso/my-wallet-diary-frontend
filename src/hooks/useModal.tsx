import React, { useContext } from "react";
import { ModalsDispatchContext } from "../context/ModalsContext";
import AlertModal from "../components/modal/AlertModal";

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

	const openAlertModal = (message: string, props?: any) => {
		open(() => <AlertModal content={message} />, props);
	};
	return {
		openModal,
		closeModal,
		closeLastModal,
		openAlertModal,
	};
};
export default useModal;
