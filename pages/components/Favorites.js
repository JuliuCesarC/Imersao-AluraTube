import config from "../../config.json"
import { FavoriteDiv } from "../styles/StyledFavorite";

function Favorites() {
	const AluraTube = config.aluratube;

	console.log(AluraTube);
	return (
		<FavoriteDiv>
			<h3>AluraTubes favoritos!</h3>
			<div className="Card">
				{AluraTube.map((fav) => {
					return (
						<a href={fav.link} target="_blank">
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