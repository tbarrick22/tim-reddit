import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
	const [search, setSearch] = useState("");
	function handleSearchInput(e) {
		setSearch(e.target.value);
	}

	// function to handle search feature
	const handleSearchClick = () => {
		// // check the user put something in
		if (search.length > 0) {
			// props.handleSearch(search); DO SOMETHING ON SEARCH (filter)
		} else {
			return;
		}
	};

	return (
		<div className={styles.SearchBar}>
			<input
				id="search"
				type="text"
				placeholder="Filter your results..."
				// value={search}
				name="search"
				onChange={handleSearchInput}
			></input>
			<button className={styles.SearchButton} onClick={handleSearchClick}>
				SEARCH
			</button>
			<p>{search}</p>
		</div>
	);
}

export default SearchBar;
