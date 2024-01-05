import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { youtube_video_api, youtube_video_by_id } from "./api";
import { apikey } from "./api";

export const fetchVideos = createAsyncThunk('videoSlice/fetchVideos', async (args, thunkAPI) => {
    try {
        const response = await fetch(youtube_video_api)
        const json = await response.json()
        const data = json.items
        return data
    } catch (error) {
        throw new Error("Failed to Fatch Data")
    }
})

export const fetchVideoById = createAsyncThunk('videoSlice/fetchVideoById', async (args, thunkAPI) => {
    const id = args
    try {
        const response = await fetch(youtube_video_by_id + id + "&key=" + apikey)
        const json = await response.json()
        const data = json?.items
        return (data[0])
    } catch (error) {
        throw new Error("Failed to Fetch Data")
    }
})

const VideoSlice = createSlice({
    name: "videoSlice",
    initialState: {
        videos: [],
        selectedVideo: null,
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
            })
            .addCase(fetchVideoById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchVideoById.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.selectedVideo = action.payload;
            })
            .addCase(fetchVideoById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export default VideoSlice.reducer