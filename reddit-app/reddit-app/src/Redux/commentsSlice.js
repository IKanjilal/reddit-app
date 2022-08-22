import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchComments } from '../Api/api';

export const loadComments = createAsyncThunk('comments/loadComment', async(link) => {
    const topComments = await fetchComments(link);
    const commentsByPost = {
        link,
        topComments
    };
    return commentsByPost;
})

const initialState = {
    commentsData: {},
    comments: [],
    showComments: false,
    isLoading: false,
    isError: false
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        toggleVisibility: (state, action) => {
            state.showComments = action.payload;
        }
    },
    extraReducers: {
        [loadComments.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.commentsData[action.payload.link] = action.payload.topComments;
            const list = state.commentsData[action.payload.link]; 
            state.isLoading = false;
            state.isError = false;
            state.comments = list;
        },
        [loadComments.rejected]: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})

export const selectShowComments = state => state.comments.ShowComments;
export const isLoading = state => state.comments.isLoading;
export const { toggleVisibility } = commentsSlice.actions;

export default commentsSlice.reducer;