import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import VideoSlice from "./VideoSlice";

const store = configureStore({
    reducer:{
        sidebar: SidebarSlice,
        videos:VideoSlice,
    }
})

export default store