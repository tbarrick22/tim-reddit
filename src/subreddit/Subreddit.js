import { useDispatch } from "react-redux";
import styles from "./Subreddit.module.css";
import { setSelectedSubreddit } from "../subreddits/subredditsSlice";

function Subreddit({ name, icon }) {
	const dispatch = useDispatch();
	// const selectedSubreddit = useSelector(selectSelectedSubreddit);

	const iconStyle = {
		width: "24px",
		height: "24px",
	};
	// prevent empty string passing to src
	let iconLink = icon;
	if (icon === "") {
		iconLink = null;
	}

	const handleClick = () => {
		console.log(name);
		dispatch(setSelectedSubreddit(name));
	};

	return (
		<li onClick={handleClick} className={styles.sub}>
			<img src={iconLink} alt={""} style={iconStyle} />
			<h5> r/{name}</h5>
		</li>
	);
}

export default Subreddit;
