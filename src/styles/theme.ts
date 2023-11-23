import { Theme } from "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		color: {
			black: string;
			white: string;
			gray: string;
			red: string;
			main: string;
			sub: string;
		};
	}
}

const theme: Theme = {
	color: {
		black: "#000",
		white: "#fff",
		gray: "#D9D9D9",
		red: "#DC0000",
		main: "#fdd953",
		sub: "#C999FE",
	},
};

export default theme;
