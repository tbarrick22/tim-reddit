import { useSelector } from "react-redux";
import Subreddit from "../subreddit/Subreddit";
// import styles from "./Subreddits.module.css";
import { selectStatus, selectSubreddits } from "./subredditsSlice";

function Subreddits() {
	// get data ready for presentation
	const subreddits = useSelector(selectSubreddits);
	// const selectedSubreddit = useSelector(selectSelectedSubreddit);
	const status = useSelector(selectStatus);

	// Check status for cases where subreddits not loaded
	if (status === "loading") {
		return <p>Loading Subreddits...</p>;
	}
	if (status === "failed") {
		return <p>Failed to load Subreddits...</p>;
	}

	return (
		<div className="sub-content">
			<h2>Subreddits</h2>
			<ul className="subreddit-list">
				{subreddits.map((sub) => (
					<Subreddit
						key={sub.id}
						name={sub.display_name}
						icon={sub.icon_img}
					/>
				))}
			</ul>
		</div>
	);
}

export default Subreddits;
