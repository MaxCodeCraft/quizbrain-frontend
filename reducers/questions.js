import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestionsToStore: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addQuestionsToStore } = questionsSlice.actions;
export default questionsSlice.reducer;
