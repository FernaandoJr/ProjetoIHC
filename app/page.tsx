import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, Vote, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
			<main className="container mx-auto px-4 py-12">
				<section className="text-center mb-16">
					<h1 className="text-4xl font-bold text-blue-800 mb-4">Simplifique as Decisões do Seu Condomínio</h1>
					<p className="text-xl text-gray-600 mb-8">Votação online segura e eficiente para uma gestão condominial moderna</p>
					<Button size="lg" asChild>
						<Link href="/votar">
							Comece Agora <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</section>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					<div>
						<h2 className="text-3xl font-bold text-blue-700 mb-4">Transforme a Participação dos Moradores</h2>
						<p className="text-gray-600 mb-6">O CondomínioVota oferece uma plataforma intuitiva para realizar votações online, aumentando o engajamento dos moradores e simplificando o processo de tomada de decisões.</p>
						<ul className="space-y-2">
							{["Votações seguras e anônimas", "Resultados em tempo real", "Acessível de qualquer dispositivo", "Economia de tempo e recursos"].map((item, index) => (
								<li key={index} className="flex items-center text-gray-700">
									<CheckCircle className="mr-2 h-5 w-5 text-green-500" />
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className="relative h-[400px]">
						<Image src="https://st3.depositphotos.com/7677414/16430/i/450/depositphotos_164304884-stock-photo-modern-residential-buildings.jpg" alt="Ilustração do sistema de votação" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
					</div>
				</div>

				<section className="mb-16">
					<h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Como Funciona</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: <Vote className="h-12 w-12 text-blue-500 mb-4" />,
								title: "Crie a Votação",
								description: "Configure facilmente novas votações com opções personalizadas.",
							},
							{
								icon: <Users className="h-12 w-12 text-blue-500 mb-4" />,
								title: "Moradores Votam",
								description: "Os moradores acessam a plataforma e votam de forma segura e anônima.",
							},
							{
								icon: <Sparkles className="h-12 w-12 text-blue-500 mb-4" />,
								title: "Resultados Instantâneos",
								description: "Visualize os resultados em tempo real e tome decisões informadas.",
							},
						].map((step, index) => (
							<Card key={index}>
								<CardHeader>
									<CardTitle className="flex flex-col items-center">
										{step.icon}
										{step.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-center text-gray-600">{step.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section className="mb-16">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl text-blue-700">Depoimentos</CardTitle>
							<CardDescription>O que nossos clientes dizem sobre o CondomínioVota</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-2 gap-6">
								{[
									{
										quote: "O CondomínioVota revolucionou nossa forma de tomar decisões. A participação dos moradores aumentou significativamente!",
										author: "Maria Silva, Síndica",
									},
									{
										quote: "Fácil de usar e extremamente eficiente. Recomendo para todos os condomínios que buscam modernizar sua gestão.",
										author: "João Santos, Morador",
									},
								].map((testimonial, index) => (
									<Card key={index}>
										<CardContent className="pt-6">
											<p className="italic text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
											<p className="text-sm text-gray-500">- {testimonial.author}</p>
										</CardContent>
									</Card>
								))}
							</div>
						</CardContent>
					</Card>
				</section>

				<section id="cadastro" className="mb-16">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl text-blue-700">Comece a Usar o CondomínioVota</CardTitle>
							<CardDescription>Cadastre-se gratuitamente e transforme a gestão do seu condomínio</CardDescription>
						</CardHeader>
						<CardContent>
							<form className="space-y-4">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label htmlFor="nome" className="block text-sm font-medium text-gray-700">
											Nome
										</label>
										<Input type="text" id="nome" name="nome" placeholder="Seu nome completo" />
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700">
											E-mail
										</label>
										<Input type="email" id="email" name="email" placeholder="seu@email.com" />
									</div>
								</div>
								<div>
									<label htmlFor="condominio" className="block text-sm font-medium text-gray-700">
										Nome do Condomínio
									</label>
									<Input type="text" id="condominio" name="condominio" placeholder="Nome do seu condomínio" />
								</div>
								<Button type="submit" className="w-full">
									Cadastrar Gratuitamente
								</Button>
							</form>
						</CardContent>
					</Card>
				</section>
			</main>
		</div>
	);
}
