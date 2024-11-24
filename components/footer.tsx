import { Building } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-blue-800 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center space-x-2 mb-4 md:mb-0">
						<Building className="h-6 w-6" />
						<span className="text-xl font-bold">CondomínioVota</span>
					</div>
					<nav className="flex space-x-4">
						<a href="#" className="hover:underline">
							Termos de Uso
						</a>
						<a href="#" className="hover:underline">
							Política de Privacidade
						</a>
						<a href="#" className="hover:underline">
							FAQ
						</a>
					</nav>
				</div>
				<div className="mt-4 text-center text-sm">© 2024 CondomínioVota. Todos os direitos reservados.</div>
			</div>
		</footer>
	);
}
