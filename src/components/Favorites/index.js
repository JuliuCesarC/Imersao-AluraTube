import config from "../../../config.json"
import { FavoriteDiv } from "./components/StyledFavorite";

function Favorites() {
	const AluraTube = config.aluratube;

	return (
		<FavoriteDiv>
			<h3>AluraTubes favoritos!</h3>
			<div className="Card">
				{AluraTube.map((fav) => {
					return (
						<a href={fav.link} target="_blank" key={fav.link}>
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