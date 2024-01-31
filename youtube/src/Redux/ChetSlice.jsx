import { createSlice } from "@reduxjs/toolkit";

const ChetSlice = createSlice({
    name: 'chetslice',
    initialState: {
        messages : [],
    },
    reducers: {
        addMessage : (state, action) => {
            state.messages.splice(25,1);
            state.messages.unshift(action.payload)
        }
    }
})

export const {addMessage} = ChetSlice.actions

export default ChetSlice.reducer