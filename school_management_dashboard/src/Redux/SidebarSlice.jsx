import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice= createSlice({
    name: "sidebarSlice",
    initialState :{
        isMenuOpen: false
    },
    reducers:{
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const {toggleMenu} = SidebarSlice.actions

export default SidebarSlice.reducer