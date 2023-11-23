import { useState } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";

const ModalsProvider = ({ children }) => {
	const [openedModals, setOpenedModals] = useState([]);
	const open = (Component, props) => {
		setOpenedModals((modals) => {
			return [...modals, { Component, props }];
		});
	};
	const close = (Component) => {
		setOpenedModals((modals) => {
			return modals.filter((modal) => modal.Component !== Component);
		});
	};

	const closeLast = () => {
		setOpenedModals((modals) => {
			return modals.slice(0, modals.length - 1);
		});
	};

	const dispatch = { open, close, closeLast };

	return (
		<ModalsDispatchContext.Provider value={dispatch}>
			<ModalsStateContext.Provider value={openedModals}>{children}</ModalsStateContext.Provider>
		</ModalsDispatchContext.Provider>
	);
};

export default ModalsProvider;
