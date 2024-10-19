import { createSlice } from "@reduxjs/toolkit";

export const userDetail = createSlice({
    name: userDetail.name,
    initialState: {
        users:[],
        loading: false,
        error: null
    },
});

export default userDetail.reducer;