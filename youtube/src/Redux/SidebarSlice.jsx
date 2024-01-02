import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name : 'sidebar',
    initialState: {
        isMenuOpen : true
    },
    reducers:{
        toggleMenu(state){
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})


export default SidebarSlice.reducer