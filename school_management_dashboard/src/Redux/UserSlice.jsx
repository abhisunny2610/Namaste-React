import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserdata = createAsyncThunk("User/data", async (args, thunkAPI) => {

    const { skip, limit } = args
    try {
        const response = await fetch(`https://dummyjson.com/users?skip=${skip}&limit=${limit}`)
        const json = await response.json()
        const data = json.users
        return data
    }
    catch (error) {
        throw new Error('Falied too fetch data')
    }
})

const UserSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: [],
        loading: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserdata.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchUserdata.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.users = action.payload;
            })
            .addCase(fetchUserdata.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message;
            });
    }
})

export default UserSlice.reducer