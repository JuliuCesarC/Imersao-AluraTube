import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
	.openCardAdd {
		width: 50px;
		height: 50px;
		font-size: 20px;
		color: inherit;
		position: fixed;
		bottom: 16px;
		right: 16px;
		border: 0;
		background-color: red;
		border-radius: 50%;
		z-index: 10;
		cursor: pointer;
		transition-property: box-shadow transform;
		transition-duration: 0.2s;
		&:hover,
		&:focus {
			opacity: unset;
			box-shadow: 0px 0px 10px rgba(255, 0, 0, 0.5);
			transform: scale(1.1);
		}
	}
	#pageForm {
		width: 100%;
		height: 100vh;
		padding: 2% 5%;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		display: flex;
		justify-content: center;
		& > div {
			position: relative;
			display: flex;
			flex-direction: column;
			border-radius: 8px;
			width: 320px;
			background-color: ${({ theme }) => theme.backgroundLevel2};
			padding: 16px;
			overflow: hidden;
		}
	}
	#navAdd {
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10px;
		.navVideo {
			background-color: unset;
			color: ${({ theme }) => theme.textColorBase};
			width: 50%;
			height: 45px;
			border: unset;
			border-top-left-radius: 8px;
			font-size: 16px;
			transition: transform 0.1s;
			cursor: pointer;
			:focus,
			:hover {
				opacity: unset;
				transform: scale(1.02);
			}
		}
		.navCategory {
			color: ${({ theme }) => theme.textColorBase};
			width: 50%;
			height: 45px;
			background-color: unset;
			border: unset;
			border-top-right-radius: 8px;
			font-size: 16px;
			transition: transform .1s;
			cursor: pointer;
			:focus,
			:hover {
				opacity: unset;
				transform: scale(1.02);
			}
		}
		.active {
			background-image: linear-gradient(
				#181818,
				${({ theme }) => theme.backgroundLevel2}
			);
			background-size: cover;
			color: #ffffff;
		}
		.close-modal {
			position: absolute;
			color: inherit;
			background-color: transparent;
			top: 6px;
			right: 6px;
			width: 30px;
			height: 30px;
			border: none;
			border-radius: 50%;
			font-size: 16px;
			cursor: pointer;
			:hover {
				box-shadow: 0 0 3px ${({ theme }) => theme.textColorBase};
				opacity: unset;
			}
		}
	}
	button[type="submit"] {
		width: 100%;
		font-size: 15px;
		background-color: red;
		padding: 8px 16px;
		border: none;
		border-radius: 2px;
		cursor: pointer;
		color: inherit;
	}
	#formAddCategory{
		width: 100%;
		input {
			width: 100%;
			border-radius: 2px;
			border: 1px solid ${({ theme }) => theme.borderBase};
			padding: 8px 10px;
			margin-bottom: 10px;
			outline: none;
			color: #222222;
			background-color: #f9f9f9;
			color: ${({ theme }) => theme.textColorBase};
			background-color: ${({ theme }) => theme.backgroundBase};
		}
	}
	#formAdd {
		width: 100%;
		input {
			width: 100%;
			border-radius: 2px;
			border: 1px solid ${({ theme }) => theme.borderBase};
			padding: 8px 10px;
			margin-bottom: 10px;
			outline: none;
			color: #222222;
			background-color: #f9f9f9;
			color: ${({ theme }) => theme.textColorBase};
			background-color: ${({ theme }) => theme.backgroundBase};
		}
		select {
			width: 100%;
			border: none;
			background-color: unset;
			font-size: 15px;
			text-transform: capitalize;
			outline: unset;
			margin-bottom: 10px;
			padding: 8px;
			cursor: pointer;
			background-color: ${({ theme }) => theme.backgroundBase};
			color: ${({ theme }) => theme.textColorBase};
		}		
		img {
			width: 90%;
			margin: auto;
			margin-top: 20px;
			outline: 3px solid ${({ theme }) => theme.backgroundBase};
			outline-offset: 3px;
		}
	}
`;
