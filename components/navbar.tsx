import Link from "next/link";
import { Building } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<header className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-6 flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<Link href="/" className="flex flex-row">
						<Building className="h-8 w-8 text-blue-600" />
						<span className="ml-2 text-2xl font-bold text-blue-800">CondomínioVota</span>
					</Link>
				</div>
				<nav>
					<Button variant="ghost" asChild>
						<Link href="/">Início</Link>
					</Button>
					<Button variant="ghost" asChild>
						<Link href="/votar">Votar</Link>
					</Button>
					<Button variant="ghost" asChild>
						<Link href="/sobre">Sobre</Link>
					</Button>
				</nav>
			</div>
		</header>
	);
}
