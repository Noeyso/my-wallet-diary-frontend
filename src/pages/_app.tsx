import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "../styles/Global";
import theme from "../styles/theme";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<main>
				<Header />
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}

export default MyApp;
