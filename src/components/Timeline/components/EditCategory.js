import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { StyledBackgroundCategory } from "./StyledEditCategory";
import { UpdatePageContext } from "../../RegisterVideo/components/UpdatePage";

const PROJECT_URL = "https://cuumiwqjbuglmdcukchy.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dW1pd3FqYnVnbG1kY3VrY2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzgyOTcsImV4cCI6MTk4Mzc1NDI5N30.W6js41CqAvkOEo1ZSTjN5gKC5cvYnDOdzn-oBubiRiQ";
const Supabase = createClient(PROJECT_URL, API_KEY);

function EditCategory({ editCategory, setOpenEditCategory }) {
	const [standbyID, setStandbyID] = useState([]);
	const [videosCategory, setVideosCategory] = React.useState(
		editCategory.videos
	);
	const updateContext = React.useContext(UpdatePageContext);

	function deleteVideo(eDelete, ID) {
		eDelete.target.parentNode.classList.add("Removed");
		let newVideosCategory = videosCategory.filter((e) => e.id != ID);
		setTimeout(() => {
			setVideosCategory(newVideosCategory);
		}, 300);
		setStandbyID([...standbyID, ID]);
	}
	return (
		<StyledBackgroundCategory>
			<form
				className="formCategory"
				onSubmit={(eSubmit) => {
					eSubmit.preventDefault();
					let inputTitle = eSubmit.target.children[0].value.toLowerCase();
					if (inputTitle.trim() < 1) {
						alert("Texto invalido.");
						return;
					}
					if (inputTitle != editCategory.title) {
						Supabase.from("video")
							.update({ playlist: inputTitle })
							.match({ playlist: editCategory.title })
							.then((res) => {
								console.log(res);
								setOpenEditCategory(false);
							})
							.catch((err) => {
								console.log(err);
							});
					}
					if (videosCategory != editCategory.videos) {
						standbyID.forEach((videoID) => {
							Supabase.from("video")
								.delete()
								.match({ id: videoID })
								.then((res) => {
									console.log(res);
									if (inputTitle == editCategory.title) {
										setOpenEditCategory(false);
									}
									if (videosCategory.length == 0) {
										updateContext.toggleUpdate();
									}
								})
								.catch((err) => {
									console.log(err);
								});
						});
					}
				}}
			>
				<input type="text" defaultValue={editCategory.title} required />
				<button
					type="button"
					className="closeEditCategory"
					onClick={(e) => {
						if (videosCategory != editCategory.videos) {
							if (!confirm("Tem certeza que deseja cancelar alterações?")) {
								return;
							}
						}
						setOpenEditCategory(false);
					}}
				>
					✖
				</button>
				<div className="scrollCardVideos">
					{videosCategory.map((video) => {
						return (
							<div className="cardVideo" key={video.id}>
								<img src={video.thumb} alt="imagem thumbnail" />
								<p>{video.title}</p>
								<button
									type="button"
									onClick={(eDelete) => {
										deleteVideo(eDelete, video.id);
									}}
								>
									✖
								</button>
							</div>
						);
					})}
				</div>
				<button type="submit" id="saveConfigCategory">
					Salvar Configurações
				</button>
			</form>
		</StyledBackgroundCategory>
	);
}

export default EditCategory;
