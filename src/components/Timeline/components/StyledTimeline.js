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
			width: 30px;
			height: 30px;
			padding: 2px;
			border-radius: 50%;
			transition: all .2s;
			:hover{
				box-shadow: 0 0 5px ${({ theme }) => theme.textColorBase};
			}
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
		height: 12px;
		border-radius: 5px;
	}
	#Scrollbar::-webkit-scrollbar-button {
		display: none;
	}
	#Scrollbar::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.backgroundLevel2};
		border-radius: 5px;
	}
	#Scrollbar::-webkit-scrollbar-track {
		background-color: #707070;
		border-radius: 5px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;
