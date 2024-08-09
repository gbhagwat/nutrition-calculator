import ingredients from "../Data/ingredients.json";
import { Ingredients } from "../Components/Nutrition/Ingredients";
import { Calculator } from "../Components/Nutrition/Calculator";
import { useDispatch, useSelector } from "react-redux";
import { resetIngredients } from "../App/SelectedIngredientsSlice";

function compare(a, b) {
  const itemA = a.name.toUpperCase();
  const itemB = b.name.toUpperCase();

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
}

function filterCategory(array, cat) {
  var output = array.filter(function (item) {
    return item.category === cat;
  });
  output.sort(compare);
  return output;
}

function reset(dispatch) {
  dispatch(resetIngredients());
  //   this.$refs.ing.forEach(function (el) {
  //     return (el.isSelected = false);
  //   });
}

export default function BuildPizza() {
  const dispatch = useDispatch();
  const portionSize = useSelector((state) => state.portionSize);
  const foodType = useSelector((state) => state.foodType);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <section className="px-3 py-3 mb-5">
            <h4>
              {portionSize}-Size {foodType} Nutrition Facts
            </h4>
            <h5>
              <span>Start with a</span> Base.
            </h5>
            <div className="ingredients card-deck mb-4">
              {filterCategory(ingredients, "Crust").map(
                (item, index) => (
                  <Ingredients
                    name={item.name}
                    key={index}
                    calories={
                      item.portionSize === "full"
                        ? item.full.calories
                        : item.half.calories
                    }
                    fat={
                      item.portionSize === "full"
                        ? item.full.fat
                        : item.half.fat
                    }
                    satFat={
                      item.portionSize === "full"
                        ? item.full.satFat
                        : item.half.satFat
                    }
                    chol={
                      item.portionSize === "full"
                        ? item.full.chol
                        : item.half.chol
                    }
                    sodium={
                      item.portionSize === "full"
                        ? item.full.sodium
                        : item.half.sodium
                    }
                    carbs={
                      item.portionSize === "full"
                        ? item.full.carbs
                        : item.half.carbs
                    }
                    fiber={
                      item.portionSize === "full"
                        ? item.full.fiber
                        : item.half.fiber
                    }
                    protein={
                      item.portionSize === "full"
                        ? item.full.protein
                        : item.half.protein
                    }
                    sugars={
                      item.portionSize === "full"
                        ? item.full.sugars
                        : item.half.sugars
                    }
                    category={item.category}
                  ></Ingredients>
                )
              )}
            </div>
            <h5>
              <span>Pick a</span> Sauce.
            </h5>
            <div className="ingredients card-deck mb-4">
              {filterCategory(ingredients, "Sauce").map(
                (item, index) => (
                  <Ingredients
                    name={item.name}
                    key={index}
                    calories={
                      item.portionSize === "full"
                        ? item.full.calories
                        : item.half.calories
                    }
                    fat={
                      item.portionSize === "full"
                        ? item.full.fat
                        : item.half.fat
                    }
                    satFat={
                      item.portionSize === "full"
                        ? item.full.satFat
                        : item.half.satFat
                    }
                    chol={
                      item.portionSize === "full"
                        ? item.full.chol
                        : item.half.chol
                    }
                    sodium={
                      item.portionSize === "full"
                        ? item.full.sodium
                        : item.half.sodium
                    }
                    carbs={
                      item.portionSize === "full"
                        ? item.full.carbs
                        : item.half.carbs
                    }
                    fiber={
                      item.portionSize === "full"
                        ? item.full.fiber
                        : item.half.fiber
                    }
                    protein={
                      item.portionSize === "full"
                        ? item.full.protein
                        : item.half.protein
                    }
                    sugars={
                      item.portionSize === "full"
                        ? item.full.sugars
                        : item.half.sugars
                    }
                    category={item.category}
                  ></Ingredients>
                )
              )}
            </div>
            <h5>
              <span>Choose your</span> cheese.
            </h5>
            <div className="ingredients card-deck mb-4">
              {filterCategory(ingredients, "Cheese").map(
                (item, index) => (
                  <Ingredients
                    name={item.name}
                    key={index}
                    calories={
                      item.portionSize === "full"
                        ? item.full.calories
                        : item.half.calories
                    }
                    fat={
                      item.portionSize === "full"
                        ? item.full.fat
                        : item.half.fat
                    }
                    satFat={
                      item.portionSize === "full"
                        ? item.full.satFat
                        : item.half.satFat
                    }
                    chol={
                      item.portionSize === "full"
                        ? item.full.chol
                        : item.half.chol
                    }
                    sodium={
                      item.portionSize === "full"
                        ? item.full.sodium
                        : item.half.sodium
                    }
                    carbs={
                      item.portionSize === "full"
                        ? item.full.carbs
                        : item.half.carbs
                    }
                    fiber={
                      item.portionSize === "full"
                        ? item.full.fiber
                        : item.half.fiber
                    }
                    protein={
                      item.portionSize === "full"
                        ? item.full.protein
                        : item.half.protein
                    }
                    sugars={
                      item.portionSize === "full"
                        ? item.full.sugars
                        : item.half.sugars
                    }
                    category={item.category}
                  ></Ingredients>
                )
              )}
            </div>
          </section>
        </div>
        <div className="col-12 col-lg-3">
          <Calculator
            title="Nutrition Facts"
            subTitle="Items Selected"
          ></Calculator>
          <button onClick={reset(dispatch)} className="btn btn-secondary">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
