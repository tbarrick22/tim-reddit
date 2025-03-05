import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "./searchSlice";

function SearchBar() {
	const dispatch = useDispatch();
	const [input, setInput] = useState("");

	function handleSearchInput(e) {
		setInput(e.target.value);
	}

	// function to handle search feature
	const handleSearchClick = () => {
		// // check the user put something in
		// if (search.length > 0) {
		// 	// props.handleSearch(search); DO SOMETHING ON SEARCH (filter)
		// } else {
		// 	return;
		// }
		dispatch(setSearchQuery(input));
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
