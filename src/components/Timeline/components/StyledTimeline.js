import styled from "styled-components";

export const StyledTimeline = styled.div`
	background-color: ${({ theme }) => theme.backgroundBase || "#F9F9F9"};
	color: ${({ theme }) => theme.textColorBase || "#222222"};
	width: 100%;
	transition: all 0.2s;
	.editCategory{
		position: fixed;
		background-color: rgba(0,0,0,0.5);
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		padding: 5%;		
		z-index: 100;
		.cardCategory{
			background-color: ${({ theme }) => theme.backgroundBase || "#F9F9F9"};
			width: 100%;
			height: 100%;
			max-width: 320px;
			margin: auto;
			border-radius: 8px;
			padding: 16px;
		}
	}
	section {
		width: 100%;
		padding: 0;
		padding: 16px;
		margin-bottom: 15px;
	}
	.title-edit {
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		padding-bottom: 5px;
		border-bottom: 2px solid ${({ theme }) => theme.backgroundLevel2};
		h2 {
			font-size: 20px;
			text-transform: capitalize;
		}
		img {
			width: 30px;
			height: 30px;
		}
		#inputEditTagName{
			background-color: unset;
			border: unset;
			color: ${({ theme }) => theme.textColorBase};
			border: 1px solid ${({ theme }) => theme.borderBase};
			font-size: 20px;
			font-weight: 600;
			padding: 2px 5px;
		}
	}
	#Scrollbar {
		width: 100%;
		padding: 15px 5px;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		display: grid;
		grid-gap: 16px;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-auto-columns: minmax(200px, 1fr);
		grid-auto-flow: column;
	}
	#CardVideo {
		position: relative;
		scroll-snap-align: start;
		a {
			span {
				padding-top: 8px;
				display: block;
				padding-right: 20px;
				color: ${({ theme }) => theme.textColorBase || "#222222"};
			}
		}
		img {
		aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 200px;
    max-width: 210px;
    height: auto;
		}
		.deleteVideo {
			animation: showDeleteBtn .2s;
			animation-play-state: 50%;
			background-color: rgb(255, 0, 0);
			color: ${({ theme }) => theme.textColorBase};
			position: absolute;
			width: 35px;
			height: 35px;
			border-radius: 50%;
			border: unset;
			left: 175px;
			top: -8px;
			z-index: 1;
			&:hover,
			&:focus {
				opacity: unset;
				box-shadow: 0px 0px 7px rgb(255, 0, 0);
				transform: scale(1.2);
			}
		}
	}
	@keyframes showDeleteBtn{
		0%{
			transform: scale(0);
		}
		100%{
			transform: scale(1);
		}
	}
	#Scrollbar::-webkit-scrollbar {
		background-color: ${({ theme }) => theme.borderBase || "#ccc"};
		height: 12px;
		border-radius: 5px;
	}
	#Scrollbar::-webkit-scrollbar-button {
		display: none;
	}
	#Scrollbar::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.backgroundLevel2 || "#aaa"};
		border-radius: 5px;
	}
	#Scrollbar::-webkit-scrollbar-track {
		background-color: #ffffff30;
		border-radius: 5px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;
