import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const relationshipOfMelodrame = localFont({
	src: "../../public/rom.woff2",
	variable: "--font-relationship-of-melodrame",
});

const alyamama = localFont({
	src: "../../public/alyamama.woff2",
	variable: "--font-alyamama",
});

export const metadata: Metadata = {
	title: "@xvcf | xvcf.dev",
	description: "xvcf's personal website!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${alyamama.variable} ${relationshipOfMelodrame.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
