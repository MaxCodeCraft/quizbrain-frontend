import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const scoreSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    addScoreCategory: (state, action) => {
      state.value.push(action.payload);
    },
    removeScoreCategory: (state) => {
      state.value = [];
    },
  },
});

export const { addScoreCategory, removeScoreCategory } = scoreSlice.actions;
export default scoreSlice.reducer;
