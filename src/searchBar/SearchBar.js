import styles from "./SearchBar.module.css";

function SearchBar() {
	function handleSearchInput(e) {
		// setSearch(e.target.value);
	}

	// function to handle search feature
	const handleSearchClick = () => {
		// // check the user put something in
		// if (search.length > 0) {
		// 	props.handleSearch(search);
		// } else {
		// 	return;
		// }
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
		</div>
	);
}

export default SearchBar;
