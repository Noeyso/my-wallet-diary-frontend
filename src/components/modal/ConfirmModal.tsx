import React from "react";
import Template from "./Template";

type Props = {
	children: React.ReactNode;
};

const ConfirmModal = ({ children }: Props) => {
	return <Template>{children}</Template>;
};

export default ConfirmModal;
