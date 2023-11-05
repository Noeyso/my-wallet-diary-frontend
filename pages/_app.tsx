import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "../styles/Global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<GlobalStyle />
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
