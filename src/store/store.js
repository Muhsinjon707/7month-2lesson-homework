import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slice/counterSlice";
import cartReducer from "./slice/cartSlice";
import modalReducer from "./slice/modalSlice";
import todoReducer from "./slice/todoSlice";
import playerReducer from "./slice/playersSlice"

export const store = configureStore({
    reducer: {
        "counter": counterReducer,
        "cart": cartReducer,
        'modal': modalReducer,
        'todo': todoReducer,
        'players': playerReducer
    }
})