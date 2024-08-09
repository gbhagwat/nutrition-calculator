import { configureStore } from "@reduxjs/toolkit";
import SelectedIngredientsReducer from "./SelectedIngredientsSlice";
import FoodTypeReducer from "./FoodTypeSlice";
import PortionSizeReducer from "./PortionSizeSlice";

export const store = configureStore({
  reducer: {
    selectedIngredients: SelectedIngredientsReducer,
    foodType: FoodTypeReducer,
    portionSize: PortionSizeReducer,
  },
});
