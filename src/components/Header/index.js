import styled from "styled-components";
import config from "../../../config.json";
import { StyledHeader } from "./components/StyledHeader";

const StyledBanner = styled.div`
	background-image: url(${(props) => props.bg});
	background-size: cover;
	background-position-y: 58%;
	height: 230px;
	width: 100%;
`;
function Header() {
	return (
		<StyledHeader>
			<StyledBanner bg={config.banner} />
			<section className="userInfo">
				<img
					className="profile"
					src={`https://github.com/${config.github}.png`}
					alt="Foto de perfil"
				/>
				<span>
					<h2>
						<a
							href={`https://github.com/${config.github}`}
							alt="Link perfil GitHub."
						>
							<img src="/img/github.png" />
							{config.name}
						</a>
					</h2>
					<h4>{config.job}</h4>
				</span>
			</section>
		</StyledHeader>
	);
}
export default Header;
