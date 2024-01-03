import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { youtube_video_api } from "./api";

export const fetchVideos = createAsyncThunk('videoSlice/fetchVideos', async (args, thunkAPI) => {
    try {
        const response = await fetch(youtube_video_api)
        const data = response.json()
        return data
    } catch (error) {
        throw new Error("Failed to Fatch Data")
    }
})

const VideoSlice = createSlice({
    name: "videoSlice",
    initialState: {
        videos: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export default VideoSlice.reducer