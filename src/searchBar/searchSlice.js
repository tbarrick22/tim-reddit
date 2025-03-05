import { createSlice } from "@reduxjs/toolkit";

// set initial state
const initialState = {
	search: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	// if this isn't working try getting rid of nested search in state
	reducers: {
		setSearchQuery: (state, action) => {
			state.search = action.payload;
		},
	},
});

// export selector, actions and reducer
export const selectSearch = (state) => state.search.search;
export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
