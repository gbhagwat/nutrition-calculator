import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portionSize: "full",
};

export const portionSizeSlice = createSlice({
  name: "portionSize",
  initialState,
  reducers: {
    changePortionSize: (state, action) => {
      state.portionSize = action.payload;
    },
  },
});

export const { changePortionSize } = portionSizeSlice.actions;

export default portionSizeSlice.reducer;
