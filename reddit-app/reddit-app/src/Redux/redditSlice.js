import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSubredditReddits } from "../Api/api";


export const loadReddits = createAsyncThunk("reddits/loadReddits", async () => {
    const data = await fetchSubredditReddits();
    return data; 
});

const initialState = {
    reddits: [],
    selectedSubreddit: "",
    selectedCard: "",
    searchTerm: "",
    isLoading: false,
    hasError: false,
};


const redditsSlice = createSlice({
    name:"reddits",
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        getRedditsPending(state) {
            state.isLoading = true;
            state.hasError = false;
        },
        getRedditsSuccess(state, action) {
            
            state.reddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        getRedditsFailure(state) {
            state.isLoading = false;
            state.hasError = true;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        setSelectedCard(state, action) {
            state.selectedCard = action.payload;
        },
        
    },
    extraReducers: {
        [loadReddits.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadReddits.fulfilled]: (state, action) => {
            state.reddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
            state.searchTerm = "";
        },
        [loadReddits.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        
    }
});

export const { 
    setSearchTerm,
    getRedditsPending,
    getRedditsSuccess,
    getRedditsFailure,
    setSelectedSubreddit, 
    setSelectedCard,
} = redditsSlice.actions;

export const selectReddits = (state) => state.reddits.reddits;
export const selectSearchTerm = (state) => state.reddits.searchTerm;
export const selectSelectedSubreddit = (state) => state.reddits.selectedSubreddit;
export const selectSelectedCard = (state) => state.reddits.selectedCard;


export default redditsSlice.reducer;
