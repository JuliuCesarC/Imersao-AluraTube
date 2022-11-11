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
	const [playlists, setPlaylists] = React.useState({});

	React.useEffect(() => {
		Supabase.from("video")
			.select("*")
			.then((dados) => {
				let supPlayNames = dados.data.map((x) => x.playlist);
				let playlistNames = supPlayNames.filter(
					(e, i) => supPlayNames.indexOf(e) == i
				);
				let arrayPlayNames = []
				playlistNames.forEach((playNames) => {
					let playlist = { [playNames]: dados.data.filter(x=>x.playlist == playNames) }
					arrayPlayNames.push(playlist)
				});
				arrayPlayNames.reduce((prev, next)=> Object.assign(prev, next))
				setPlaylists(arrayPlayNames[0])
			});
	}, []);

	return (
		<>
			<Menu searchValue={searchValue} setSearchValue={setSearchValue} />
			<Header />
			<Timeline searchValue={searchValue} playlistVideos={playlists} />
			<Favorites />
		</>
	);
}

export default HomePage;
