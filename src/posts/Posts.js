import styles from "./Posts.module.css";
import Post from "../post/Post";
import { useSelector } from "react-redux";
import { selectPosts, selectStatus } from "./postsSlice";
import { selectSearch } from "../searchBar/searchSlice";
import { selectSelectedSubreddit } from "../subreddits/subredditsSlice";

function Posts() {
	// get data to render
	const posts = useSelector(selectPosts);
	const search = useSelector(selectSearch);
	const status = useSelector(selectStatus);
	const selectedSubreddit = useSelector(selectSelectedSubreddit);

	// Check status and render accoringly
	if (status === "loading") {
		return <p>Loading posts for r/{selectedSubreddit}...</p>;
	}
	if (status === "failed") {
		return <p>Failed to load posts for r/{selectedSubreddit}...</p>;
	}

	// filter posts by the search value
	const filteredPosts = posts.filter((post) =>
		post.selftext.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="post-content">
			<h2>r/{selectedSubreddit}</h2>
			<ul className="post-list">
				{filteredPosts.map((post) => (
					<Post
						key={post.id}
						title={post.title}
						text={post.selftext}
						permalink={post.permalink}
						thumbnail={post.thumbnail}
						author={post.author}
					/>
				))}
			</ul>
		</div>
	);
}

export default Posts;
