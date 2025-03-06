import "./App.css";
import { ReactComponent as Logo } from "../images/Reddit_Lockup_Logo.svg";
import { useDispatch, useSelector } from "react-redux";
// import components
import NavBar from "../navBar/NavBar";
import SearchBar from "../searchBar/SearchBar";
import Posts from "../posts/Posts";
import Subreddits from "../subreddits/Subreddits";
import {
	fetchSubreddits,
	selectSelectedSubreddit,
} from "../subreddits/subredditsSlice";
import { useEffect } from "react";
import { fetchPosts } from "../posts/postsSlice";
// import selectors and actions

function App() {
	// useDispatch
	const dispatch = useDispatch();
	const selectedSubreddit = useSelector(selectSelectedSubreddit);

	// Fetch posts when subreddit changes
	useEffect(() => {
		dispatch(fetchPosts(selectedSubreddit));
	}, [selectedSubreddit, dispatch]);

	// Load subreddits on mount
	useEffect(() => {
		dispatch(fetchSubreddits());
	}, [dispatch]);

	return (
		<div className="App">
			<NavBar />
			<div className="content">
				<Posts />
				<Subreddits />
			</div>
		</div>
	);
}

export default App;
