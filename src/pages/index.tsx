import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
	const router = useRouter();

	useEffect(() => {
		const isLoggedIn = checkLoginStatus(); // Implement this function

		if (!isLoggedIn && !router.pathname.includes("sign")) {
			router.push("/signin");
		} else if (isLoggedIn && (router.pathname === "/signin" || router.pathname === "/")) {
			// Redirect to the main page if logged in and on the login or default page
			router.push("/main");
		}
	}, [router]);

	const checkLoginStatus = () => {
		const token = localStorage.getItem("token");
		if (token) return true;
		return false;
	};

	return <div></div>;
};

export default index;
