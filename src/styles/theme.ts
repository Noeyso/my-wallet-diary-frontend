import { Theme } from "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		color: {
			black: string;
			white: string;
			main: string;
			sub: string;
		};
	}
}

const theme: Theme = {
	color: {
		black: "#000",
		white: "#fff",
		main: "#fdd953",
		sub: "#C999FE",
	},
};

export default theme;
