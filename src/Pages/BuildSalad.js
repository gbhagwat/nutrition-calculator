import ingredients from "../Data/ingredients.json";
import { UIStore } from "../App/store";
import { Ingredients } from "../Components/Nutrition/Ingredients";
import { Calculator } from "../Components/Nutrition/Calculator";

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

export default function BuildSalad() {
  const portionSize = UIStore.useState(s => s.portionSize);
  const foodType = UIStore.useState(s => s.foodType);

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
              {filterCategory(ingredients, "Greens").map(({ name, category, half, full }, index) => {
                return (
                  <Ingredient
                    name={name}
                    key={index}
                    calories={
                      portionSize === "full"
                        ? item.full.calories
                        : item.half.calories
                    }
                    fat={
                      portionSize === "full"
                        ? item.full.fat
                        : item.half.fat
                    }
                    satFat={
                      portionSize === "full"
                        ? item.full.satFat
                        : item.half.satFat
                    }
                    chol={
                      portionSize === "full"
                        ? item.full.chol
                        : item.half.chol
                    }
                    sodium={
                      portionSize === "full"
                        ? item.full.sodium
                        : item.half.sodium
                    }
                    carbs={
                      portionSize === "full"
                        ? item.full.carbs
                        : item.half.carbs
                    }
                    fiber={
                      portionSize === "full"
                        ? item.full.fiber
                        : item.half.fiber
                    }
                    protein={
                      portionSize === "full"
                        ? item.full.protein
                        : item.half.protein
                    }
                    sugars={
                      portionSize === "full"
                        ? item.full.sugars
                        : item.half.sugars
                    }
                    category={item.category}
                  ></Ingredients>
                )
              )}
              {filterCategory(ingredients, "Grains").map(
                (item, index) => (
                  <Ingredients
                    name={item.name}
                    key={index}
                    calories={
                      portionSize === "full"
                        ? item.full.calories
                        : item.half.calories
                    }
                    fat={
                      portionSize === "full"
                        ? item.full.fat
                        : item.half.fat
                    }
                    satFat={
                      portionSize === "full"
                        ? item.full.satFat
                        : item.half.satFat
                    }
                    chol={
                      portionSize === "full"
                        ? item.full.chol
                        : item.half.chol
                    }
                    sodium={
                      portionSize === "full"
                        ? item.full.sodium
                        : item.half.sodium
                    }
                    carbs={
                      portionSize === "full"
                        ? item.full.carbs
                        : item.half.carbs
                    }
                    fiber={
                      portionSize === "full"
                        ? item.full.fiber
                        : item.half.fiber
                    }
                    protein={
                      portionSize === "full"
                        ? item.full.protein
                        : item.half.protein
                    }
                    sugars={
                      portionSize === "full"
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
                      portionSize === "full"
                        ? item.full.calories
                        : item.half.calories
                    }
                    fat={
                      portionSize === "full"
                        ? item.full.fat
                        : item.half.fat
                    }
                    satFat={
                      portionSize === "full"
                        ? item.full.satFat
                        : item.half.satFat
                    }
                    chol={
                      portionSize === "full"
                        ? item.full.chol
                        : item.half.chol
                    }
                    sodium={
                      portionSize === "full"
                        ? item.full.sodium
                        : item.half.sodium
                    }
                    carbs={
                      portionSize === "full"
                        ? item.full.carbs
                        : item.half.carbs
                    }
                    fiber={
                      portionSize === "full"
                        ? item.full.fiber
                        : item.half.fiber
                    }
                    protein={
                      portionSize === "full"
                        ? item.full.protein
                        : item.half.protein
                    }
                    sugars={
                      portionSize === "full"
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
          <button onClick={() => UIStore.update(s => {s.selectedIngredients = []})} className="btn btn-secondary">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
