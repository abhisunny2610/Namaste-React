import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Utils/CartSlice";

const store = configureStore({
    reducer : {
        cart : CartSlice
    }
})

export default store