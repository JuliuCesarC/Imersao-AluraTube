import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 11px;
  overflow: hidden;
  
  input {
    width: 80%;
		border-end-start-radius: 10px;
		border-top-left-radius: 10px;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
    cursor: pointer;
    border: none;
    background-color: #222;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    height: 40px;
		transition: unset;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;
export default function Search({ searchValue, setSearchValue }) {
	return (
		<StyledSearch>
			<input
				type="text"
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
			/>
			<button>🔎</button>
		</StyledSearch>
	);
}
