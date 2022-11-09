import Logo from "../logo";
import Search from "./components/Search";
import { StyledMenu } from "./components/StyledMenu";

function Menu({searchValue, setSearchValue}) {
	return (
		<StyledMenu>
			<div>
				<Logo />
			</div>
				<Search searchValue={searchValue} setSearchValue={setSearchValue}/>
		</StyledMenu>
	);
}
export default Menu