import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const selectedIngredientsSlice = createSlice({
  name: "selectedIngredients",
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.selectedIngredients.push(action.payload);
    },
    resetIngredients: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addIngredient, resetIngredients } =
  selectedIngredientsSlice.actions;

export default selectedIngredientsSlice.reducer;
