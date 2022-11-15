import React from "react";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Favorites from "../src/components/Favorites";
import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://cuumiwqjbuglmdcukchy.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dW1pd3FqYnVnbG1kY3VrY2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzgyOTcsImV4cCI6MTk4Mzc1NDI5N30.W6js41CqAvkOEo1ZSTjN5gKC5cvYnDOdzn-oBubiRiQ";
const Supabase = createClient(PROJECT_URL, API_KEY);

function HomePage() {
	const [searchValue, setSearchValue] = React.useState("");

	function randomID() {
		let mathRandom;
		do{
			mathRandom = String(Math.floor(Math.random() * 100000000000))
		}while(mathRandom.length < 10)
		return mathRandom.slice(0,9);
	}

	function substituiID() {
		Supabase.from("video")
			.select("*")
			.then((dados) => {
				dados.data.forEach((videoIndividual) => {
					let ID = videoIndividual.id;
					Supabase.from("video")
						.update({ id: randomID() })
						.match({ id: ID })
						.then((res) => {
							console.log(res);
						})
						.catch((err) => {
							console.log(err);
						});
				});
			});
	}

	return (
		<>
			<button onClick={substituiID}>Trocar</button>
			<Menu searchValue={searchValue} setSearchValue={setSearchValue} />
			<Header />
			<Timeline searchValue={searchValue} />
			<Favorites />
		</>
	);
}

export default HomePage;
