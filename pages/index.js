import React from "react";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Timeline from "./components/Timeline";
import { CSSReset } from "../src/components/CSSReset";

function HomePage() {
	const [searchValue, setSearchValue] = React.useState("");
	const [theme, setTheme] = React.useState(false);

	function changeTheme() {
		theme
			? setTheme(false)
			: setTheme({
					backgroundBase: "#181818",
					backgroundLevel1: "#202020",
					backgroundLevel2: "#313131",
					borderBase: "#383838",
					textColorBase: "#FFFFFF",
			  });
	}

	return (
		<>
			<CSSReset />
			<Menu
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				theme={theme}
				changeTheme={changeTheme}
			/>
			<Header theme={theme} />
			<Timeline searchValue={searchValue} theme={theme} />
			<Favorites theme={theme} />
		</>
	);
}

export default HomePage;
