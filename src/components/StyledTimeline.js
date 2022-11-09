import styled from "styled-components";

export const StyledTimeline = styled.div`
	flex: 1;
	width: 100%;
	padding: 16px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.backgroundBase || "#F9F9F9"};
	color: ${({ theme }) => theme.textColorBase || "#222222"};
	transition: all .2s;
	h2 {
		font-size: 16px;
		margin-bottom: 16px;
		text-transform: capitalize;
	}
	img {
		aspect-ratio: 16/9;
		font-weight: 500;
		object-fit: cover;
		width: 100%;
		max-width: 210px;
		height: auto;
	}
	#Scrollbar::-webkit-scrollbar {
		background-color: ${({theme})=> theme.borderBase || "#ccc"};
		height: 12px;
		border-radius: 5px;
	}
	#Scrollbar::-webkit-scrollbar-button {
		display: none;
	}
	#Scrollbar::-webkit-scrollbar-thumb {
		background: ${({theme})=> theme.backgroundLevel2 || "#aaa"};
		border-radius: 5px;
	}
	#Scrollbar::-webkit-scrollbar-track {
		background-color: #ffffff30;
		border-radius: 5px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	section {
		width: 100%;
		padding: 0;
		overflow: hidden;
		padding: 16px;
		margin-bottom: 15px;
		div {
			width: calc(100vw - 16px * 4);
			display: grid;
			grid-gap: 16px;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			grid-auto-flow: column;
			grid-auto-columns: minmax(200px, 1fr);
			overflow-x: scroll;
			scroll-snap-type: x mandatory;

			a {
				scroll-snap-align: start;
				span {
					padding-top: 8px;
					display: block;
					padding-right: 24px;
					color: ${({ theme }) => theme.textColorBase || "#222222"};
				}
			}
		}
	}
`;
