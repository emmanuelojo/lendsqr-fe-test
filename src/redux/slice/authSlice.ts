import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    email: "" as string,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserEmail: (state = initialState, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});

export const { setUserEmail } = authSlice.actions;

export default authSlice.reducer;
