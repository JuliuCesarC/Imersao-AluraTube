import styled from "styled-components";

export const StyledTimeline = styled.div`
	background-color: ${({ theme }) => theme.backgroundBase || "#F9F9F9"};
	color: ${({ theme }) => theme.textColorBase || "#222222"};
	width: 100%;
	transition: all 0.2s;
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
			width: 35px;
			height: 35px;
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
		grid-auto-flow: column;
		grid-auto-columns: minmax(200px, 1fr);
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
			width: 100%;
			max-width: 210px;
			height: auto;
		}
		.deleteVideo {
			background-color: rgb(255, 0, 0);
			color: ${({ theme }) => theme.textColorBase};
			position: absolute;
			width: 35px;
			height: 35px;
			border-radius: 50%;
			border: unset;
			left: 175px;
			top: -8px;
			z-index: 10;
			&:hover,
			&:focus {
				opacity: unset;
				box-shadow: 0px 0px 7px rgb(255, 0, 0);
				transform: scale(1.2);
			}
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
