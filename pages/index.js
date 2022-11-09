import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Timeline from "./components/Timeline";
import { CSSReset } from "../src/components/CSSReset";

function HomePage() {
	return (
		<>
			<CSSReset />
			<Menu/>
			<Header/>
			<Timeline/>
			<Favorites/>
		</>
	);
}

export default HomePage;
