import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// set initial state
const initialState = {
	posts: [],
	status: "idle",
	error: null,
};

// create async thunk to fetch subreddits
export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (subreddit) => {
		const endpoint = `https://www.reddit.com/r/${subreddit}.json`;
		const response = await fetch(endpoint);
		const postsJson = await response.json();
		const postsJsonFiltered = postsJson.data.children.map(
			(post) => post.data
		);
		return postsJsonFiltered;
	}
);

// create slice
const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// export actions, selectors
export const selectPosts = (state) => state.posts.posts;
export const selectStatus = (state) => state.posts.status;

// export reducer
export default postsSlice.reducer;
