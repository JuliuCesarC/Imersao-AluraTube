import React from "react";
import styled from "styled-components";

const StyledBackgroundCategory = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	padding: 5%;
	z-index: 100;
	.cardCategory {
		background-color: ${({ theme }) => theme.backgroundBase || "#F9F9F9"};
		width: 100%;
		height: 100%;
		max-width: 320px;
		margin: auto;
		border-radius: 8px;
		padding: 16px;
	}
`;

function EditCategory({ openEditCategory, setOpenEditCategory }) {
	const [videosCategory, setVideosCategory] = React.useState(
		openEditCategory.videos
	);
	console.log(openEditCategory);
	return (
		<StyledBackgroundCategory>
			<form className="cardCategory">
				<input type="text" defaultValue={openEditCategory.title} />
				{videosCategory.map((video) => {
					return (
						<div>
							<img src={video.thumb} alt="imagem thumbnail" />
							<p>{video.title}</p>
							<button type="button">✖</button>
						</div>
					);
				})}
			</form>
		</StyledBackgroundCategory>
	);
}

export default EditCategory;
