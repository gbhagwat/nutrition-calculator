import { Store } from "pullstate";

export const UIStore = new Store({
   portionSize: "half",
   foodType: "Flatbread",
   selectedIngredients: [],
   showFlatbread: true,
   showSalad: false,
   showFlatbreads: false,
   showSalads: true,
   showFullFacts: true,
   showHalfFacts: false,
   isShowFacts: true,
   totals: {
      calories: 0,
      fat: 0,
      satFat: 0,
      chol: 0,
      sodium: 0,
      carbs: 0,
      fiber: 0,
      protein: 0,
      sugars: 0
   }
});