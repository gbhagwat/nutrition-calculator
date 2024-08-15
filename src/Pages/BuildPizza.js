import ingredients from "../Data/ingredients.json";
import { UIStore } from "../App/store";
import { Ingredients } from "../Components/Nutrition/Ingredients";
import { Calculator } from "../Components/Nutrition/Calculator";

export default function BuildPizza() {
  let selectedIngredients = UIStore.useState((s) => s.selectedIngredients);
  let portionSize = UIStore.useState((s) => s.portionSize);
  let foodType = UIStore.useState((s) => s.foodType);

  const [checkedState, setCheckedState] = useState([]);

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    console.log("reached")

    const updatedCheckedState = checkedState.map((item, index) => 
      index === position ? !item : item
    );
    console.log(updatedCheckedState)


    setCheckedState(updatedCheckedState);

    const totalNutrition = updatedCheckedState.reduce(
      (totals, totalCal, totalFat, totalSatFat, totalCarbs, totalChol, totalFiber, totalProtein, totalSodium, totalSugars, currentState, index) => {
        if(currentState === true) {
          if (portionSize === "half") {
            return totals = {
              totalCal: totalCal + ingredients[index].half.calories,
              totalFat: totalFat + ingredients[index].half.fat,
              totalSatFat: totalSatFat + ingredients[index].half.satFat,
              totalCarbs: totalCarbs + ingredients[index].half.carbs,
              totalChol: totalChol + ingredients[index].half.chol,
              totalFiber: totalFiber + ingredients[index].half.fiber,
              totalProtein: totalProtein + ingredients[index].half.protein,
              totalSodium: totalSodium + ingredients[index].half.sodium,
              totalSugars: totalSugars + ingredients[index].half.sugars
             }
          }
          if (portionSize === "full") {
            return totals = {
              totalCal: totalCal + ingredients[index].full.calories,
              totalFat: totalFat + ingredients[index].full.fat,
              totalSatFat: totalSatFat + ingredients[index].full.satFat,
              totalCarbs: totalCarbs + ingredients[index].full.carbs,
              totalChol: totalChol + ingredients[index].full.chol,
              totalFiber: totalFiber + ingredients[index].full.fiber,
              totalProtein: totalProtein + ingredients[index].full.protein,
              totalSodium: totalSodium + ingredients[index].full.sodium,
              totalSugars: totalSugars + ingredients[index].full.sugars
        }
          }
        }
        return totals;
      },
      0
    );
    setTotal(totalNutrition);
  }

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
              {filterCategory(ingredients, "Crust").map((item) => (
                <Ingredients
                  name={item.name}
                  key={item.name}
                  calories={
                    portionSize === "full"
                      ? item.full.calories
                      : item.half.calories
                  }
                  fat={portionSize === "full" ? item.full.fat : item.half.fat}
                  satFat={
                    portionSize === "full" ? item.full.satFat : item.half.satFat
                  }
                  chol={
                    portionSize === "full" ? item.full.chol : item.half.chol
                  }
                  sodium={
                    portionSize === "full" ? item.full.sodium : item.half.sodium
                  }
                  carbs={
                    portionSize === "full" ? item.full.carbs : item.half.carbs
                  }
                  fiber={
                    portionSize === "full" ? item.full.fiber : item.half.fiber
                  }
                  protein={
                    portionSize === "full"
                      ? item.full.protein
                      : item.half.protein
                  }
                  sugars={
                    portionSize === "full" ? item.full.sugars : item.half.sugars
                  }
                  category={item.category}
                ></Ingredients>
              ))}
            </div>
            <h5>
              <span>Pick a</span> Sauce.
            </h5>
            <div className="ingredients card-deck mb-4">
            {filterCategory(ingredients, "Sauce").map(({ name, category, half, full }, index) => {
              return (
                <Ingredient
                  name={name}
                  key={index}
                  category={category}
                  calories={
                    portionSize === "full"
                      ? item.full.calories
                      : item.half.calories
                  }
                  fat={portionSize === "full" ? item.full.fat : item.half.fat}
                  satFat={
                    portionSize === "full" ? item.full.satFat : item.half.satFat
                  }
                  chol={
                    portionSize === "full" ? item.full.chol : item.half.chol
                  }
                  sodium={
                    portionSize === "full" ? item.full.sodium : item.half.sodium
                  }
                  carbs={
                    portionSize === "full" ? item.full.carbs : item.half.carbs
                  }
                  fiber={
                    portionSize === "full" ? item.full.fiber : item.half.fiber
                  }
                  protein={
                    portionSize === "full"
                      ? item.full.protein
                      : item.half.protein
                  }
                  sugars={
                    portionSize === "full" ? item.full.sugars : item.half.sugars
                  }
                  category={item.category}
                ></Ingredients>
              ))}
            </div>
            <h5>
              <span>Choose your</span> cheese.
            </h5>
            {filterCategory(ingredients, "Cheese").map(({ name, category, half, full }, index) => {
              return (
                <Ingredient
                  name={name}
                  key={index}
                  category={category}
                  calories={
                    portionSize === "full"
                      ? item.full.calories
                      : item.half.calories
                  }
                  fat={portionSize === "full" ? item.full.fat : item.half.fat}
                  satFat={
                    portionSize === "full" ? item.full.satFat : item.half.satFat
                  }
                  chol={
                    portionSize === "full" ? item.full.chol : item.half.chol
                  }
                  sodium={
                    portionSize === "full" ? item.full.sodium : item.half.sodium
                  }
                  carbs={
                    portionSize === "full" ? item.full.carbs : item.half.carbs
                  }
                  fiber={
                    portionSize === "full" ? item.full.fiber : item.half.fiber
                  }
                  protein={
                    portionSize === "full"
                      ? item.full.protein
                      : item.half.protein
                  }
                  sugars={
                    portionSize === "full" ? item.full.sugars : item.half.sugars
                  }
                  category={item.category}
                ></Ingredients>
              ))}
            </div>
          </section>
        </div>
        <div className="col-12 col-lg-3">
          <Calculator
            selectedIngredients={selectedIngredients}
            title="Nutrition Facts"
            subTitle="Items Selected"
          ></Calculator>
          <button
            onClick={() =>
              UIStore.update((s) => {
                s.selectedIngredients = [];
              })
            }
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

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
