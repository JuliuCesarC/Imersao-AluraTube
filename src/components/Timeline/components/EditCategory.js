import React, { useState } from "react";
import styled from "styled-components";
import { createClient } from "@supabase/supabase-js";

const StyledBackgroundCategory = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	padding: 15px 5%;
	z-index: 100;
	form {
		position: relative;
		background-color: ${({ theme }) => theme.backgroundBase || "#F9F9F9"};
		width: 100%;
		height: 100%;
		max-width: 500px;
		margin: auto;
		border-radius: 8px;
		padding: 16px;
		input {
			width: 85%;
			background-color: unset;
			color: ${({ theme }) => theme.textColorBase};
			border: 1px solid ${({ theme }) => theme.borderBase};
			border-radius: 2px;
			padding: 5px;
			margin-bottom: 20px;
			font-size: 18px;
		}
		.closeEditCategory {
			position: absolute;
			background-color: unset;
			color: ${({ theme }) => theme.textColorBase};
			top: 8px;
			right: 8px;
			width: 30px;
			height: 30px;
			border: unset;
			border-radius: 50%;
			font-size: 16px;
			cursor: pointer;
			:hover,
			:focus {
				opacity: unset;
				box-shadow: 0 0 3px ${({ theme }) => theme.textColorBase};
			}
		}
		div {
			display: grid;
			grid-template-columns: auto auto;
			align-items: flex-start;
			gap: 10px;
		}
		.cardVideo {
			position: relative;
			display: flex;
			flex-direction: column;
			img {
				width: 100%;
				aspect-ratio: 16/9;
				font-weight: 500;
				object-fit: cover;
			}
			button {
				position: absolute;
				background-color: rgb(255, 0, 0);
				color: ${({ theme }) => theme.textColorBase};
				top: -5px;
				right: -5px;
				width: 35px;
				height: 35px;
				border-radius: 50%;
				border: unset;
				z-index: 10;
				&:hover,
				&:focus {
					opacity: unset;
					box-shadow: 0px 0px 7px rgb(255, 0, 0);
					transform: scale(1.1);
				}
			}
		}
		.Removed {
			animation-name: removed;
			animation-duration: 0.3s;
			animation-fill-mode: forwards;
		}
		#saveConfigCategory {
			position: initial;
			width: 100%;
			font-size: 16px;
			background-color: red;
			padding: 10px;
			border: none;
			border-radius: 2px;
			cursor: pointer;
			color: inherit;
		}
		.scrollCardVideos {
			width: 100%;
			height: calc(100vh - 160px);
			padding: 8px;
			margin-bottom: 10px;
			border: 2px solid #444444;
			border-radius: 10px;
			outline: 2px solid rgba(0, 0, 0, 0.3);
			outline-offset: -4px;
			overflow-y: scroll;
			overflow-x: hidden;
			::-webkit-scrollbar {
				background-color: ${({ theme }) => theme.borderBase || "#ccc"};
				width: 12px;
				border-radius: 5px;
				margin-top: 30px;
			}
			::-webkit-scrollbar-thumb {
				background: ${({ theme }) => theme.backgroundLevel2 || "#aaa"};
				border-radius: 5px;
			}
			::-webkit-scrollbar-track {
				background-color: #ffffff30;
				border-radius: 5px;
				margin-top: 5px;
				padding-top: 10px;
			}
		}
		@keyframes removed {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(0);
			}
		}
	}
`;

const PROJECT_URL = "https://cuumiwqjbuglmdcukchy.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dW1pd3FqYnVnbG1kY3VrY2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzgyOTcsImV4cCI6MTk4Mzc1NDI5N30.W6js41CqAvkOEo1ZSTjN5gKC5cvYnDOdzn-oBubiRiQ";
const Supabase = createClient(PROJECT_URL, API_KEY);

function EditCategory({ editCategory, setOpenEditCategory }) {
	const [standbyID, setStandbyID] = useState([]);
	const [videosCategory, setVideosCategory] = React.useState(
		editCategory.videos
	);
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
									if(inputTitle == editCategory.title){
										setOpenEditCategory(false);
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
