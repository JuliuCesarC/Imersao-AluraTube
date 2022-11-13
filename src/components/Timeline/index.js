import { StyledTimeline } from "./components/StyledTimeline";
import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://cuumiwqjbuglmdcukchy.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dW1pd3FqYnVnbG1kY3VrY2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzgyOTcsImV4cCI6MTk4Mzc1NDI5N30.W6js41CqAvkOEo1ZSTjN5gKC5cvYnDOdzn-oBubiRiQ";
const Supabase = createClient(PROJECT_URL, API_KEY);

function Timeline({ searchValue }) {
	const [playlistVideos, setPlaylistVideos] = React.useState({});
	const [playlistName, setPlaylistName] = React.useState([]);
	const [editMode, setEditMode] = React.useState(false);
	const [updateSupabaseState, setUpdateSupabaseState] = React.useState(false);
	let updateSupa = [];

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
				arrayPlayNames.reduce((prev, next) => Object.assign(prev, next));
				setPlaylistVideos(arrayPlayNames[0]);
				setPlaylistName(Object.keys(arrayPlayNames[0]).sort());
			});
	}, [updateSupabaseState]);

	function openEditTags() {
		editMode ? setEditMode(false) : setEditMode(true);
		if (updateSupa.length > 0) {
			updateSupa.forEach((Up) => {
				Supabase.from("video")
					.update({ playlist: Up.next })
					.match({ playlist: Up.prev })
					.then((eUpdate) => {
						console.log(eUpdate);
					})
					.catch((err) => {
						console.log("error insert video", err);
					});
			});
			updateSupabaseState
				? setUpdateSupabaseState(false)
				: setUpdateSupabaseState(true);
			updateSupa = [];
		}
	}
	function editTagName(eEdit, list) {
		let indexName = playlistName.indexOf(list);
		let newPlaylist = playlistName.map((e) => e);
		newPlaylist[indexName] = eEdit.target.value;
		updateSupa.push({ prev: list, next: eEdit.target.value });
	}
	function randomID() {
		return Math.random().toString(36).substring(2, 9);
	}
	return (
		<StyledTimeline>
			{playlistName.map((listName) => {
				const videos = playlistVideos[listName];
				return (
					<section className="Tags" key={listName}>
						<div className="title-edit">
							{editMode ? (
								<input
									type="text"
									onChange={(e) => {
										editTagName(e, listName);
									}}
									defaultValue={listName}
								/>
							) : (
								<h2>{listName}</h2>
							)}
							<img
								src="img/edit.png"
								alt="Botão editar categoria."
								onClick={openEditTags}
							/>
						</div>
						<div id="Scrollbar">
							{videos &&
								videos
									.filter((searchVideo) => {
										const titleNormalized = searchVideo.title.toLowerCase();
										const searchValueNormalized = searchValue.toLowerCase();
										return titleNormalized.includes(searchValueNormalized);
									})
									.map((video) => {
										return (
											<div id="CardVideo" key={randomID()}>
												{editMode && (
													<button
														className="deleteVideo"
														onClick={(e) => {
															console.log(video.url);
															Supabase.from("video")
																.delete()
																.match({ url: video.url })
																.then((del) => {
																	console.log(del);
																})
																.catch((err) => {
																	console.log("error insert video", err);
																});
														}}
													>
														✖
													</button>
												)}
												<a
													onClick={(e) => {
														console.log(video.url);
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
