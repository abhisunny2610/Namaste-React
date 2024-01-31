import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import VideoSlice from "./VideoSlice";
import ChetSlice from "./ChetSlice";

const store = configureStore({
    reducer:{
        sidebar: SidebarSlice,
        videos:VideoSlice,
        chet: ChetSlice,
    }
})

export default store