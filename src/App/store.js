import { Store } from "pullstate";

export const UIStore = new Store({
   portionSize: "half",
   foodType: "Flatbread",
   selectedIngredients: [],
   showFlatbread: true,
   showSalad: false,
   showFlatbreads: true,
   showSalads: false,
   showFullFacts: true,
   showHalfFacts: false,
   isShowFacts: true,
   isSelected: false,
   isActive: false

});