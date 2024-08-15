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
   facts: {}
});