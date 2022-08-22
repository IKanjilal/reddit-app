import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    subreddits: [],
    subredditIcon: []
}

const subredditSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        getSubreddits (state, action) {
            state.subreddits = action.payload;
        }
    }
});

export const { getSubreddits } = subredditSlice.actions;

export const selectSubreddits = (state) => state.subreddits.subreddits;

export default subredditSlice.reducer;