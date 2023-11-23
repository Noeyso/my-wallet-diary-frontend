import { createContext } from "react";

/**
 * @description 현재 open된 modal들
 */
export const ModalsStateContext = createContext([]);

/**
 * @description modal을 열고 닫는 함수
 */
export const ModalsDispatchContext = createContext({
	open: (component: () => JSX.Element, props: any) => {},
	close: (component: () => JSX.Element) => {},
	closeLast: () => {},
});
