import { StyledTimeline } from "./components/StyledTimeline";
import React from "react";

function Timeline({searchValue, playlistVideos}) {
	const playlistName = Object.keys(playlistVideos);

	return (
		<StyledTimeline>
			{playlistName.map((listName) => {
				const videos = playlistVideos[listName];
				return (
					<section className="Tags" key={listName}>
						<h2>{listName}</h2>
						<div id="Scrollbar">
							{videos
								.filter((searchVideo) => {
									const titleNormalized = searchVideo.title.toLowerCase();
									const searchValueNormalized = searchValue.toLowerCase();
									return titleNormalized.includes(searchValueNormalized);
								})
								.map((video) => {
									return (
										<div id="CardVideo">
											<button className="deleteVideo">✖</button>
											<a
												key={video.url}
												onClick={(e) => {
													console.log(video.url);
													localStorage.setItem(
														"videoID",
														JSON.stringify({id:video.url, title:video.title})
													);
												}}
												href="/video"
											>
												<img src={video.thumb} alt="Imagem thumbnail" />
												<span>{video.title}</span>
											</a>
										</div>
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
