import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
			className={cn("h-full", "antialiased", alyamama.variable, relationshipOfMelodrame.variable, "font-sans", geist.variable)}
		>
			<body className="min-h-full flex flex-col">
				{children}
				<Footer />
			</body>
		</html>
	);
}
