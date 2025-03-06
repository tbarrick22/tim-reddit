import { useState } from "react";
// import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "./searchSlice";
import styles from "./SearchBar.module.css";

function SearchBar({ className }) {
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

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSearchClick();
		}
	};

	return (
		<div className={`${styles.searchBar} ${className}`}>
			<input
				className={styles.input}
				id="search"
				type="text"
				placeholder="Filter your results..."
				// value={search}
				name="search"
				onChange={handleSearchInput}
				onKeyDown={handleKeyDown}
			></input>
			<button onClick={handleSearchClick}>🔎</button>
		</div>
	);
}

export default SearchBar;
