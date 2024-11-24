import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Vote, Sparkles, CheckCircle } from "lucide-react";

export default function SobreNos() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
			<main className="container mx-auto px-4 py-12">
				<h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Sobre o CondomínioVota</h1>

				<Card className="mb-12">
					<CardHeader>
						<CardTitle className="text-2xl text-blue-700">Nossa Missão</CardTitle>
						<CardDescription>Transformando a gestão de condomínios através da democracia digital</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-gray-600">O CondomínioVota nasceu da necessidade de modernizar e simplificar o processo de tomada de decisões em condomínios. Nossa plataforma de votação online permite que todos os moradores participem ativamente das decisões importantes, promovendo transparência e eficiência na gestão condominial.</p>
					</CardContent>
				</Card>

				<Tabs defaultValue="como-funciona" className="mb-12">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="como-funciona">Como Funciona</TabsTrigger>
						<TabsTrigger value="beneficios">Benefícios</TabsTrigger>
						<TabsTrigger value="seguranca">Segurança</TabsTrigger>
					</TabsList>
					<TabsContent value="como-funciona">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<Vote className="mr-2 h-5 w-5 text-blue-500" />
									Como Funciona
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ol className="list-decimal list-inside space-y-2 text-gray-600">
									<li>O síndico cria uma nova votação na plataforma.</li>
									<li>Os moradores recebem uma notificação sobre a nova votação.</li>
									<li>Cada morador acessa a plataforma com seu ID único.</li>
									<li>Os votos são registrados de forma segura e anônima.</li>
									<li>Ao final do período de votação, os resultados são divulgados automaticamente.</li>
								</ol>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="beneficios">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<Sparkles className="mr-2 h-5 w-5 text-blue-500" />
									Benefícios
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-2 text-gray-600">
									<li>Maior participação dos moradores nas decisões do condomínio</li>
									<li>Economia de tempo e recursos com assembleias virtuais</li>
									<li>Transparência no processo de votação</li>
									<li>Resultados instantâneos e precisos</li>
									<li>Histórico completo de todas as votações realizadas</li>
								</ul>
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="seguranca">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
									Segurança
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">A segurança e a integridade do processo de votação são nossas prioridades. Utilizamos criptografia de ponta a ponta, autenticação de dois fatores e auditorias regulares para garantir que cada voto seja contabilizado corretamente e que a privacidade dos moradores seja respeitada.</p>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				<section className="mb-12">
					<h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Nosso Impacto</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card>
							<CardHeader>
								<CardTitle className="text-xl text-blue-700">+500</CardTitle>
								<CardDescription>Condomínios Atendidos</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-xl text-blue-700">+50.000</CardTitle>
								<CardDescription>Votos Registrados</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-xl text-blue-700">98%</CardTitle>
								<CardDescription>Taxa de Satisfação</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</section>

				<Card>
					<CardHeader>
						<CardTitle className="text-2xl text-blue-700">Entre em Contato</CardTitle>
						<CardDescription>Estamos aqui para ajudar seu condomínio a tomar melhores decisões</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label htmlFor="nome" className="block text-sm font-medium text-gray-700">
										Nome
									</label>
									<input type="text" id="nome" name="nome" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">
										E-mail
									</label>
									<input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
								</div>
							</div>
							<div>
								<label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
									Mensagem
								</label>
								<textarea id="mensagem" name="mensagem" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
							</div>
							<Button type="submit" className="w-full">
								Enviar Mensagem
							</Button>
						</form>
					</CardContent>
				</Card>
			</main>

			<footer className="bg-blue-800 text-white py-8 mt-12">
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
					<div className="mt-4 text-center text-sm">© 2023 CondomínioVota. Todos os direitos reservados.</div>
				</div>
			</footer>
		</div>
	);
}
