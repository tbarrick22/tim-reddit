import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Set initial state
const initialState = {
	subreddits: [],
	selectedSubreddit: "reactjs",
	status: "idle",
	error: null,
};

// create async thunk to fetch subreddits
export const fetchSubreddits = createAsyncThunk(
	"subreddits/fetchSubreddits",
	async () => {
		const endpoint = "https://www.reddit.com/subreddits/popular.json";
		const response = await fetch(endpoint);
		const subredditJson = await response.json();
		const subredditJsonFiltered = subredditJson.data.children.map(
			(sub) => sub.data
		);
		return subredditJsonFiltered;
	}
);

// create slice
const subredditsSlice = createSlice({
	name: "subreddits",
	initialState,
	reducers: {
		setSelectedSubreddit: (state, action) => {
			state.selectedSubreddit = action.payload;
		},
	},
	extraReducers: {
		[fetchSubreddits.pending]: (state) => {
			state.status = "loading";
		},
		[fetchSubreddits.fulfilled]: (state, action) => {
			state.status = "succeeded";
			state.subreddits = action.payload;
		},
		[fetchSubreddits.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		},
	},
});

// export actions and reducer

export const { setSelectedSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;
