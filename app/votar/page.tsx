"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function VotingSystem() {
	const [userId, setUserId] = useState("");
	const [selectedOption, setSelectedOption] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!userId.trim()) {
			toast({
				title: "Erro",
				description: "Informe seu CPF!",
				variant: "destructive",
			});
			return;
		}
		if (!selectedOption) {
			toast({
				title: "Erro",
				description: "Selecione um síndico para votar!",
				variant: "destructive",
			});
			return;
		}
		// Here you would typically send the vote to a server
		console.log(`User ${userId} voted for ${selectedOption}`);

		// Retrieve the votes dictionary from local storage
		const votes = JSON.parse(localStorage.getItem("votes") || "{}");

		// Check if the current user has already voted
		if (votes[userId]) {
			toast({
				title: "Erro",
				description: `CPF: ${userId} seu voto já foi escolhido.`,
				variant: "destructive",
			});
			return;
		}

		// Store the vote in the dictionary
		votes[userId] = selectedOption;
		localStorage.setItem("votes", JSON.stringify(votes));

		toast({
			title: "Sucesso!",
			description: "Seu voto foi registado.",
		});
		// Reset form
		setUserId("");
		setSelectedOption("");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>Votação</CardTitle>
					<CardDescription>Escolha em qual síndico do condomínio quer votar</CardDescription>
				</CardHeader>
				<form onSubmit={handleSubmit}>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="userId">CPF</Label>
							<Input id="userId" placeholder="Digite seu CPF" value={userId} onChange={(e) => setUserId(e.target.value)} />
						</div>
						<RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-2">
							<Label>Secione seu voto:</Label>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option1" id="1" />
								<Avatar>
									<AvatarImage src="https://i.imgur.com/igofVe5.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Label htmlFor="option1" className="text-lg">
									Adriana Fabiana Souza
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option2" id="2" />
								<Avatar>
									<AvatarImage src="https://i.imgur.com/EhqM9el.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Label htmlFor="option2" className="text-lg">
									Benjamin Manuel Teixeira
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option3" id="3" />
								<Avatar>
									<AvatarImage src="https://i.imgur.com/g6JhhZh.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Label htmlFor="option3" className="text-lg">
									Marcos Pietro da Cunha
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option4" id="4" />
								<Avatar>
									<AvatarImage src="https://i.imgur.com/Wf5SVl7.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Label htmlFor="option4" className="text-lg">
									Tomás Osvaldo Cardoso
								</Label>
							</div>
						</RadioGroup>
					</CardContent>
					<CardFooter>
						<Button type="submit" className="w-full">
							Enviar Voto
						</Button>
					</CardFooter>
				</form>
			</Card>
			<Toaster />
		</div>
	);
}
