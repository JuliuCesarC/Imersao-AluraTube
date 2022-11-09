import React from "react";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Timeline from "./components/Timeline";
import { CSSReset } from "../src/components/CSSReset";

function HomePage() {
	const [searchValue, setSearchValue] = React.useState('')

	return (
		<>
			<CSSReset />
			<Menu searchValue={searchValue} setSearchValue={setSearchValue} />
			<Header/>
			<Timeline searchValue={searchValue}/>
			<Favorites/>
		</>
	);
}

export default HomePage;
