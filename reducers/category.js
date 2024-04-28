import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategoryToStore: (state, action) => {
      state.value = action.payload;
      console.log(state.value, " ", typeof state.value);
    },
  },
});

export const { addCategoryToStore } = categorySlice.actions;
export default categorySlice.reducer;
