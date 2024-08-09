import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodType: "Flatbread",
};

export const foodTypeSlice = createSlice({
  name: "foodType",
  initialState,
  reducers: {
    changeFoodType: (state, action) => {
      state.foodType = action.payload;
    },
  },
});

export const { changeFoodType } = foodTypeSlice.actions;

export default foodTypeSlice.reducer;
