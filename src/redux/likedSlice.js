import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likeds: {},
    orderLikeds: [],
}

const addLikedFunc = (state, action) => {
    const { product } = action.payload;
    const productID = product.id;

    state.likeds[productID] = product;
    state.orderLikeds.push(productID);
};

const removeLikedFunc = (state, action) => {
    const { id } = action.payload;

    delete state.likeds[id];
    state.orderLikeds = state.orderLikeds.filter((el) => el !== id);
};

export const likedSlice = createSlice({
    name: "likedProducts",
    initialState,
    reducers: {
        addLiked: addLikedFunc,
        removeLiked: removeLikedFunc,
    },
});

export const { addLiked, removeLiked } = likedSlice.actions;
export default likedSlice.reducer;
