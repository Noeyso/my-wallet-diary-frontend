import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "../styles/Global";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import SignLayout from "../components/layout/SignLayout";
import MainLayout from "../components/layout/MainLayout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const isLoggedIn = checkLoginStatus(); // Implement this function

		if (!isLoggedIn && !router.pathname.includes("sign")) {
			router.push("/signin");
		} else if (isLoggedIn) {
			// Redirect to the main page if logged in and on the login or default page
			router.push("/main");
		}
	}, [router]);

	const checkLoginStatus = () => {
		const token = localStorage.getItem("token");
		if (token) return true;
		return false;
	};

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
