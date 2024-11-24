import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "./../components/footer";

export const metadata: Metadata = {
	title: "CondomínioVota",
	description: "Site do CondomínioVota",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={` antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
