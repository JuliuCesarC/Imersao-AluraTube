import { StyledSearch } from "./StyledSearch";

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
