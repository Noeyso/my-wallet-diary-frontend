import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "../styles/Global";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import SignLayout from "../components/layout/SignLayout";
import MainLayout from "../components/layout/MainLayout";
import { useEffect } from "react";
import ModalsProvider from "../context/ModalsProvider";
import Modals from "../components/modal/Modals";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const isLoggedIn = checkLoginStatus();

		if (!isLoggedIn && !router.pathname.includes("sign")) {
			router.push("/signin");
		} else if (isLoggedIn) {
			router.push("/main");
		}
	}, [router]);

	const checkLoginStatus = () => {
		const token = localStorage.getItem("token");
		if (token) return true;
		return false;
	};

	const getLayout = () => {
		if (router.pathname.startsWith("/signin") || router.pathname.startsWith("/signup")) {
			return (page) => <SignLayout>{page}</SignLayout>;
		}
		return (page) => <MainLayout>{page}</MainLayout>;
	};
	const layout = getLayout();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<ModalsProvider>
				<Modals />
				<>{layout(<Component {...pageProps} />)}</>
			</ModalsProvider>
		</ThemeProvider>
	);
}

export default MyApp;
