import SearchBar from "../searchBar/SearchBar";
import "./App.css";
import { ReactComponent as Logo } from "../images/Reddit_Lockup_Logo.svg";
import Posts from "../posts/Posts";
import Subreddits from "../subreddits/Subreddits";

function App() {
	return (
		<div className="App">
			<nav>
				<Logo></Logo>
				<SearchBar />
			</nav>
			<Posts />
			<Subreddits />
		</div>
	);
}

export default App;
