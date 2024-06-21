import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    sidebarVisible: false as boolean,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebarVisible: (state = initialState, action: PayloadAction<boolean>) => {
            state.sidebarVisible = action.payload;
        },
    },
});

export const { toggleSidebarVisible } = sidebarSlice.actions;

export default sidebarSlice.reducer;
