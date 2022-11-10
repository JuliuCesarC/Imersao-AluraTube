import React from "react";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Favorites from "../src/components/Favorites";

function HomePage() {
	const [searchValue, setSearchValue] = React.useState("");

	return (
		<>
			<Menu searchValue={searchValue} setSearchValue={setSearchValue} />
			<Header />
			<Timeline searchValue={searchValue} />
			<Favorites />
		</>
	);
}

export default HomePage;
