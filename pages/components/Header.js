import config from "../../config.json";
import { StyledHeader } from "../styles/StyledHeader";

function Header() {
	return (
		<StyledHeader>
			<div className="Cover">
				<img src="img/cover-photo.jpg" alt="Foto de capa perfil" />
			</div>
			<section className="userInfo">
				<img
					className="profile"
					src={`https://github.com/${config.github}.png`}
					alt="Foto de perfil"
				/>
				<span>
					<h2>{config.name}</h2>
					<h4>{config.job}</h4>
				</span>
			</section>
		</StyledHeader>
	);
}
export default Header
