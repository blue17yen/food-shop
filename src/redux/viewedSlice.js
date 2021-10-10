import { createSlice } from "@reduxjs/toolkit";


const addViewedFunc = (state, action) => {
    state.slice(0, 1).concat(action.payload);
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
