import { configureStore } from "@reduxjs/toolkit";
import redditsReducer from "./redditSlice";
import subredditReducer from "./subredditSlice";
import commentsReducer from "./commentsSlice";


export default configureStore({
    reducer: {
        reddits: redditsReducer,
        subreddits: subredditReducer,
        comments: commentsReducer
    }
});