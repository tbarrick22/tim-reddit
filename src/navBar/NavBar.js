import { ReactComponent as Logo } from "../images/Reddit_Lockup_Logo.svg";
import SearchBar from "../searchBar/SearchBar";
import styles from "./NavBar.module.css";

function NavBar() {
	return (
		<nav className={styles.navBar}>
			<Logo className={styles.logo}></Logo>
			<SearchBar className={styles.searchBox} />
		</nav>
	);
}

export default NavBar;
