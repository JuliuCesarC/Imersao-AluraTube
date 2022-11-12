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
	#CardVideo::-webkit-scrollbar {
		background-color: ${({theme})=> theme.borderBase || "#ccc"};
		height: 12px;
		border-radius: 5px;
	}
	#CardVideo::-webkit-scrollbar-button {
		display: none;
	}
	#CardVideo::-webkit-scrollbar-thumb {
		background: ${({theme})=> theme.backgroundLevel2 || "#aaa"};
		border-radius: 5px;
	}
	#CardVideo::-webkit-scrollbar-track {
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
			padding-top: 15px;
			/* overflow: hidden; */
			#CardVideo{
				overflow-x: scroll;
				scroll-snap-type: x mandatory;
				position: relative;
			}
			#CardVideo a {
				scroll-snap-align: start;
				span {
					padding-top: 8px;
					display: block;
					padding-right: 24px;
					color: ${({ theme }) => theme.textColorBase || "#222222"};
				}
			}
			.deleteVideo{
				position: absolute;
				width: 35px;
				height: 35px;
				border-radius: 50%;
				border: unset;
				background-color: rgb(255,0,0);
				color: ${({theme})=>{ theme.textColorBase}};
				right: -10px;
				top: -10px;
				&:hover,
				&:focus{
					opacity: unset;
				}
			}
		}
	}
`;
