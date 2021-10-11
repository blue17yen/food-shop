import { createSlice } from "@reduxjs/toolkit";

const addLikedFunc = (state, action) => {
    state.push(action.payload);
};

const removeLikedFunc = (state, action) => {
    state.filter((l) => l.id !== action.payload);
};

export const likedSlice = createSlice({
    name: "likedProducts",
    initialState: [],
    reducers: {
        addLiked: addLikedFunc,
        removeLiked: removeLikedFunc,
    },
});



export const { addLiked, removeLiked } = likedSlice.actions;
export default likedSlice.reducer;
