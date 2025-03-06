import styles from "./Post.module.css";

function Post({ title, permalink, text, thumbnail, author }) {
	// prevent empty string passing to src
	let thumbLink = thumbnail;
	if (thumbLink === "") {
		thumbLink = null;
	}

	return (
		<li className={styles.postElement}>
			<br />
			<h3>{title}</h3>
			<br />
			<img src={thumbLink} alt={title + " thumbnail"} />
			<br />
			<br />
			<p>{text}</p>
			<br />
			<a
				href={`https://www.reddit.com${permalink}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{title}
			</a>
			<br />
			<br />
			<p>By: {author}</p>
		</li>
	);
}

export default Post;
