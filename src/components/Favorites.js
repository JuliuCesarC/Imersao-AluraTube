import config from "../../config.json"
import { FavoriteDiv } from "./StyledFavorite";

function Favorites({theme}) {
	const AluraTube = config.aluratube;

	return (
		<FavoriteDiv theme={theme}>
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