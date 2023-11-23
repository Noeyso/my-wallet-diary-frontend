import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "../styles/Global";
import theme from "../styles/theme";
import Header from "../components/Header";
import { useRouter } from "next/router";
import SignLayout from "../components/layout/SignLayout";
import MainLayout from "../components/layout/MainLayout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	// Determine the layout based on the route
	const getLayout = () => {
		if (router.pathname.startsWith("/signin") || router.pathname.startsWith("/signup")) {
			return (page) => <SignLayout>{page}</SignLayout>;
		}
		return (page) => <MainLayout>{page}</MainLayout>;
	};
	// Apply the layout
	const layout = getLayout();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{layout(<Component {...pageProps} />)}
		</ThemeProvider>
	);
}

export default MyApp;
