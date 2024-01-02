import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { youtube_video_api } from "./api";

export const fetchVideos = createAsyncThunk('video/fetchVideos', async (args, thunkAPI) => {
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
        loading: 'idle',
        error : null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchVideos.pending, (state) => {
            state.loading = 'loading'
        })
        .addCase(fetchVideos.fulfilled, (state, action) => {
            state.loading = 'fulfilled';
            state.videos = action.payload;
        })
        .addCase(fetchVideos.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    }
})

export default VideoSlice.reducer