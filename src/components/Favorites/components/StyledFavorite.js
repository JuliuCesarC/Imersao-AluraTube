import styled from "styled-components";

export const FavoriteDiv = styled.div`
	width: 100%;
	padding: 10px 20px;
	background-color: ${({theme})=> theme.backgroundBase || "#F9F9F9"};
	color: ${({theme})=> theme.textColorBase || "#222"};
	transition: background-color .2s;
	h3 {
		margin-bottom: 15px;
	}
	.Card {
		display: flex;
		flex-direction: row;
		gap: 20px;
		overflow-x: auto;
	}
	img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		display: block;
		margin: auto;
	}
	a {
		color: unset;
	}
`;
