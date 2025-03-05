import styles from "./Post.module.css";

function Post({ title, permalink, thumbnail, author }) {
	// prevent empty string passing to src
	let thumbLink = thumbnail;
	if (thumbLink === "") {
		thumbLink = null;
	}

	return (
		<li>
			<h3>{title}</h3>
			<img src={thumbLink} alt={title + " thumbnail"} />
			<br />
			<a
				href={`https://www.reddit.com${permalink}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{title}
			</a>
			<p>By: {author}</p>
		</li>
	);
}

export default Post;
