import { StyledTimeline } from "./components/StyledTimeline";
import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import EditCategory from "./components/EditCategory";

const PROJECT_URL = "https://cuumiwqjbuglmdcukchy.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dW1pd3FqYnVnbG1kY3VrY2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzgyOTcsImV4cCI6MTk4Mzc1NDI5N30.W6js41CqAvkOEo1ZSTjN5gKC5cvYnDOdzn-oBubiRiQ";
const Supabase = createClient(PROJECT_URL, API_KEY);

function Timeline({ searchValue }) {
	const [playlistVideos, setPlaylistVideos] = React.useState({});
	const [playlistName, setPlaylistName] = React.useState([]);
	const [openEditCategory, setOpenEditCategory] = React.useState(false);

	React.useEffect(() => {
		Supabase.from("video")
			.select("*")
			.then((dados) => {
				let supPlayNames = dados.data.map((x) => x.playlist);
				let playlistNames = supPlayNames.filter(
					(e, i) => supPlayNames.indexOf(e) == i
				);
				let arrayPlayNames = [];
				playlistNames.forEach((playNames) => {
					let playlist = {
						[playNames]: dados.data.filter((x) => x.playlist == playNames),
					};
					arrayPlayNames.push(playlist);
				});
				if (arrayPlayNames.length > 0) {
					arrayPlayNames.reduce((prev, next) => Object.assign(prev, next));
					setPlaylistName(Object.keys(arrayPlayNames[0]).sort());
					console.log(playlistName);
				} else {
					arrayPlayNames = [];
				}
				setPlaylistVideos(arrayPlayNames[0]);
			});
	}, [openEditCategory]);

	function openCardEditCategory(categoryName, categoryVideos) {
		setOpenEditCategory({ title: categoryName, videos: categoryVideos });
	}
	return (
		<StyledTimeline>
			{openEditCategory && (
				<EditCategory
					editCategory={openEditCategory}
					setOpenEditCategory={setOpenEditCategory}
				/>
			)}
			{playlistName.map((listName) => {
				const videos = playlistVideos[listName];
				return (
					<section className="Tags" key={listName}>
						<div className="title-edit">
							<h2>{listName}</h2>
							<img
								src="img/edit.png"
								alt="Botão editar categoria."
								onClick={(e) => {
									openCardEditCategory(listName, videos);
								}}
							/>
						</div>
						<div id="Scrollbar">
							{videos
								.filter((searchVideo) => {
									const searchValueNormalized = searchValue.toLowerCase();
									if (searchVideo.title) {
										const titleNormalized = searchVideo.title.toLowerCase();
										return titleNormalized.includes(searchValueNormalized);
									} else {
										return "".includes(searchValueNormalized);
									}
								})
								.map((video) => {
									return (
										<div id="CardVideo" key={video.id}>
											<a
												onClick={(e) => {
													localStorage.setItem(
														"videoID",
														JSON.stringify({
															id: video.url,
															title: video.title,
														})
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
