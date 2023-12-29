import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer:{
        sidebar: SidebarSlice,
        users : UserSlice,
    }

})

export default store