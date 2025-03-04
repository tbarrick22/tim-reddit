import { configureStore } from "@reduxjs/toolkit";
// import reducers
import searchReducer from "../searchBar/searchSlice";
import subredditsReducer from "../subreddits/subredditsSlice";
import postsReducer from "../posts/postsSlice";

export default configureStore({
	reducer: {
		search: searchReducer,
		subreddits: subredditsReducer,
		posts: postsReducer,
	},
});
