import styled from "styled-components";

export const StyledHeader = styled.header`
	width: 100%;
	margin-top: 50px;
	background-color: ${({theme})=> theme.backgroundLevel1 || '#FFFFFF'};
	color: ${({theme})=> theme.textColorBase || "#222222"};
	transition: background-color .2s;
	.userInfo {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	}
	.profile {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	h2{
		a{
			color: ${({theme})=> theme.textColorBase};
		}
		img{
			width: 20px;
			margin-right: 5px;
		}
	}
	h4{
		color: #666666;
	}
`;
