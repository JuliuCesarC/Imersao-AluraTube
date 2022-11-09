import Logo from "../logo";
import Search from "./components/Search";
import styled from "styled-components";

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: row;
	height: 56px;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
	border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
	align-items: center;
	padding: 0 16px;
	gap: 16px;
	position: fixed;
	width: 100%;
	z-index: 1;
	transition: background-color .2s;
	.logo {
		width: 100%;
		max-width: 80px;
		@media (min-width: 600px) {
			max-width: 127px;
		}
		.text {
			fill: ${({ theme }) => theme.textColorBase || "#222222"};
		}
	}
	#ChangeColorTheme{
		position: relative;
		background-color: ${({theme})=> theme.textColorBase || "#222"};
		border: none;
		width: 50px;
		height: 25px;
		border-radius: 12px;
		&:hover,
    &:focus {
      opacity: unset;
    }
	}
	#ChangeColorTheme div{
		position: absolute;
		background-color: ${({theme})=> theme.backgroundBase || "#fff"};
		left: 0.5px;
		top: 0.5px;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		transition: left .4s;
	}
	#ChangeColorTheme.Dark div{
		left: 25.5px;
	}
`;
function Menu({ searchValue, setSearchValue, theme, changeTheme }) {
	return (
		<StyledMenu theme={theme}>
			<div>
				<Logo />
			</div>
			<Search
				theme={theme}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<button
				id="ChangeColorTheme"
				onClick={(e) => {
					let btn = document.getElementById('ChangeColorTheme')
					theme
						? btn.classList.remove("Dark")
						: btn.classList.add("Dark");
					changeTheme();
				}}
			>
				🌞 🌙
				<div></div>
			</button>
		</StyledMenu>
	);
}
export default Menu;
