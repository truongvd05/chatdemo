import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
    name: "stats",
    initialState: {
        users: 0,
        messages: 0,
        groups: 0,
    },
    reducers: {
        setStats: (state, { payload }) => ({ ...state, ...payload }),
    },
});

export const { setStats } = statsSlice.actions;
export default statsSlice.reducer;
