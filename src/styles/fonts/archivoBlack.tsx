import { Archivo_Black } from "@next/font/google";

const bold = Archivo_Black({
	weight: "400",
	display: "fallback",
	subsets: ["latin"],
	style: "normal",
	variable: "--noto-sans_KR-bold",
	fallback: ["system-ui"],
});

export { bold as archivoBlack };
