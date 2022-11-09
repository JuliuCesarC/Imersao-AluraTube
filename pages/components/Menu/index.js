import Logo from "../logo";
import Search from "./components/Search";
import { StyledMenu } from "./components/StyledMenu";

function Menu({ searchValue, setSearchValue, theme, changeTheme }) {
	return (
		<StyledMenu theme={theme}>
			<div>
				<Logo />
			</div>
			<Search
				theme={theme}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<button
				id="ChangeColorTheme"
				onClick={(e) => {
					let btn = document.getElementById('ChangeColorTheme')
					theme
						? btn.classList.remove("Dark")
						: btn.classList.add("Dark");
					changeTheme();
				}}
			>
				🌞 🌙
				<div></div>
			</button>
		</StyledMenu>
	);
}
export default Menu;
