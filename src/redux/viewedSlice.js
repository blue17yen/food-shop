import { createSlice } from "@reduxjs/toolkit";


const addViewedFunc = (state, action) => {
    const { product } = action.payload;
    if (product.id !== state[0]?.id) {
        state.unshift(product);
    } 
};

export const viewedSlice = createSlice({
    name: "viewedProducts",
    initialState: [],
    reducers: {
        addViewed: addViewedFunc,
    },
});


export const { addViewed } = viewedSlice.actions;
export default viewedSlice.reducer;
