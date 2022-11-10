import Logo from "../logo";
import Search from "./components/Search";
import React from "react";
import { ColorModeContext } from "./components/ColorMode";
import { StyledMenu } from "./components/StyledMenu";

function Menu({ searchValue, setSearchValue }) {
	const contextMode = React.useContext(ColorModeContext);
	return (
		<StyledMenu>
			<div>
				<Logo />
			</div>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<button
				id="ChangeColorTheme"
				className="Dark"
				onClick={(e) => {
					let btn = document.getElementById("ChangeColorTheme");
					contextMode.mode == "dark"
						? btn.classList.remove("Dark")
						: btn.classList.add("Dark");
					contextMode.toggleMode();
				}}
			>
				🌞 🌙
				<div></div>
			</button>
		</StyledMenu>
	);
}
export default Menu;
