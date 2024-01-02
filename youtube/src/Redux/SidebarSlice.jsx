import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isMenuOpen: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const { toggleMenu } = SidebarSlice.actions

export default SidebarSlice.reducer