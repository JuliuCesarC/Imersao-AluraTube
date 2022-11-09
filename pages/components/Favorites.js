import config from "../../config.json"
import { FavoriteDiv } from "../../src/components/StyledFavorite";

function Favorites() {
	const AluraTube = config.aluratube;

	function randomID() {
		return Math.random().toString(36).substring(2, 9);
	}
	return (
		<FavoriteDiv>
			<h3>AluraTubes favoritos!</h3>
			<div className="Card">
				{AluraTube.map((fav) => {
					return (
						<a href={fav.link} target="_blank" key={randomID()}>
							<img src={fav.img} alt="Foto Perfil" />
							{fav.name}
						</a>
					);
				})}
			</div>
		</FavoriteDiv>
	);
}

export default Favorites;