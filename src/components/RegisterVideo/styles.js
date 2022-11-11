import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
	.add-video {
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
		z-index: 99;
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
	.close-modal {
		width: 25px;
		height: 25px;
		position: absolute;
		top: 8px;
		right: 16px;
		color: inherit;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
	button[type="submit"] {
		background-color: red;
		padding: 8px 16px;
		border: none;
		border-radius: 2px;
		cursor: pointer;
		color: inherit;
	}
	form {
		width: 100%;
		padding: 5%;
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
			flex: 1;
			border-radius: 8px;
			max-width: 320px;
			background-color: ${({ theme }) => theme.backgroundLevel2};
			display: flex;
			flex-direction: column;
			position: relative;
			padding: 16px;
			padding-top: 40px;
			overflow: hidden;
		}
	}
	input {
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
	select{
		border: none;
		background-color: unset;
		font-size: unset;
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
`;
