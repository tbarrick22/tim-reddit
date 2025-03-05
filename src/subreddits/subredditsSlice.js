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
	extraReducers: (builder) => {
		builder
			.addCase(fetchSubreddits.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchSubreddits.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.subreddits = action.payload;
			})
			.addCase(fetchSubreddits.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// export actions, selectors, and reducer
export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectSelectedSubreddit = (state) =>
	state.subreddits.selectedSubreddit;
export const selectStatus = (state) => state.subreddits.status;

export const { setSelectedSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;
