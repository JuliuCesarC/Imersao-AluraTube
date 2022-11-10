import { StyledTimeline } from "./StyledTimeline";
import config from "../../config.json";

function Timeline(props) {
	const Config = config.playlists;
	const playlistName = Object.keys(config.playlists);

	return (
		<StyledTimeline>
			{playlistName.map((listName) => {
				const videos = Config[listName];
				return (
					<section className="Tags" key={listName}>
						<h2>{listName}</h2>
						<div id="Scrollbar">
							{videos
								.filter((searchVideo) => {
									const titleNormalized = searchVideo.title.toLowerCase();
									const searchValueNormalized = props.searchValue.toLowerCase();
									return titleNormalized.includes(searchValueNormalized);
								})
								.map((video) => {
									return (
										<a href={video.url} key={video.url}>
											<img src={video.thumb} alt="Imagem thumbnail" />
											<span>{video.title}</span>
										</a>
									);
								})}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}

export default Timeline;
