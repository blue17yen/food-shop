import { configureStore } from "@reduxjs/toolkit";

import basketSlice from './basketSlice';
import viewedSlice from "./viewedSlice";
import likedSlice from "./likedSlice";

export const store = configureStore({
    reducer: {
        basket: basketSlice,
        viewed: viewedSlice,
        liked: likedSlice,
    },
});
