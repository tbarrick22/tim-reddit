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
	extraReducers: {
		[fetchPosts.pending]: (state) => {
			state.status = "loading";
		},
		[fetchPosts.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.posts = action.payload;
		},
		[fetchPosts.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		},
	},
});

// export reducer
export default postsSlice.reducer;
