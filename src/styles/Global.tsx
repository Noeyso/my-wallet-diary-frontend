// Global.tsx
import { Global, css } from "@emotion/react";

const styles = (theme) => css`
	html,
	body {
		margin: 0;
		padding: 0;
		font-size: 16px;
		background-color: #fdd953; // ${theme.color.main};

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}
	main {
		width: 80vw;
		height: 80vh;
		background-color: ${theme.color.white};
		border: 2px solid ${theme.color.black};
		box-shadow: 0px 5px 8.5px 3px rgba(0, 0, 0, 0.25);
	}
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
