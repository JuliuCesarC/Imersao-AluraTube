import React from "react";
import styled from "styled-components";

const StyledBackgroundCategory = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	padding: 2% 5%;
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
		> button {
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
		.scrollCardVideos {
			width: 100%;
			height: 90%;
			padding: 8px;
			border: 2px solid #444444;
			border-radius: 8px;
			outline: 2px solid rgba(0, 0, 0, 0.2);
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
	}
`;

function EditCategory({ openEditCategory, setOpenEditCategory }) {
	const [videosCategory, setVideosCategory] = React.useState(
		openEditCategory.videos
	);
	console.log(openEditCategory);
	return (
		<StyledBackgroundCategory>
			<form className="formCategory">
				<input type="text" defaultValue={openEditCategory.title} />
				<button type="button">✖</button>
				<div className="scrollCardVideos">
					{videosCategory.map((video) => {
						return (
							<div className="cardVideo" key={video.id}>
								<img src={video.thumb} alt="imagem thumbnail" />
								<p>{video.title}</p>
								<button type="button">✖</button>
							</div>
						);
					})}
				</div>
			</form>
		</StyledBackgroundCategory>
	);
}

export default EditCategory;
