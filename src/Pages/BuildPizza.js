import ingredients from "../Data/ingredients.json";
import { UIStore } from "../App/store";
import { Ingredient } from "../Components/Nutrition/Ingredient";
import { Calculator } from "../Components/Nutrition/Calculator";

export default function BuildPizza() {
  let portionSize = UIStore.useState((s) => s.portionSize);
  let foodType = UIStore.useState((s) => s.foodType);
  let selectedIngredients = UIStore.useState((s) => s.selectedIngredients);
  let totals = {
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

  const handleOnChange = (e) => {
    let isChecked = e.target.checked;

    if(isChecked) {
      selectedIngredients = [...selectedIngredients, e.target.value]
      ingredients.map((ing) => {
        if (selectedIngredients.indexOf(e.target.value) > -1) {
          if (ing.name === e.target.value) {
            if (portionSize === "half") {
              totals = {
                calories: totals.calories + ing.half.calories,
                fat: totals.fat + ing.half.fat,
                satFat: totals.satFat + ing.half.satFat,
                chol: totals.chol + ing.half.chol,
                sodium: totals.sodium + ing.half.sodium,
                carbs: totals.carbs + ing.half.carbs,
                fiber: totals.fiber + ing.half.fiber,
                protein: totals.protein + ing.half.protein,
                sugars: totals.sugars + ing.half.sugars
              }
            }
            if (portionSize === "full") {
              totals = {
                calories: totals.calories + ing.full.calories,
                fat: totals.fat + ing.full.fat,
                satFat: totals.satFat + ing.full.satFat,
                chol: totals.chol + ing.full.chol,
                sodium: totals.sodium + ing.full.sodium,
                carbs: totals.carbs + ing.full.carbs,
                fiber: totals.fiber + ing.full.fiber,
                protein: totals.protein + ing.full.protein,
                sugars: totals.sugars + ing.full.sugars
              }
            }       
          }
        }

        return totals;
      })
      console.log(totals)                
    } else {
      ingredients.map((ing) => {
        if (selectedIngredients.indexOf(e.target.value) > -1) {
          if (ing.name === e.target.value) {
            if (portionSize === "half") {
              totals = {
                calories: totals.calories - ing.half.calories,
                fat: totals.fat - ing.half.fat,
                satFat: totals.satFat - ing.half.satFat,
                chol: totals.chol - ing.half.chol,
                sodium: totals.sodium - ing.half.sodium,
                carbs: totals.carbs - ing.half.carbs,
                fiber: totals.fiber - ing.half.fiber,
                protein: totals.protein - ing.half.protein,
                sugars: totals.sugars - ing.half.sugars
              }
            }
            if (portionSize === "full") {
              totals = {
                calories: totals.calories - ing.full.calories,
                fat: totals.fat - ing.full.fat,
                satFat: totals.satFat - ing.full.satFat,
                chol: totals.chol - ing.full.chol,
                sodium: totals.sodium - ing.full.sodium,
                carbs: totals.carbs - ing.full.carbs,
                fiber: totals.fiber - ing.full.fiber,
                protein: totals.protein - ing.full.protein,
                sugars: totals.sugars - ing.full.sugars
              }
            }       
          }
        }
        return totals;
      })
      let index = selectedIngredients.indexOf(e.target.value);
      selectedIngredients.splice(index, 1);

      console.log(totals)          
    }
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
              {filterCategory(ingredients, "Crust").map(({ name, category, half, full }, index) => {
                return (
                  <Ingredient
                    id={`custom-checkbox-${index}`}
                    name={name}
                    key={name}
                    category={category}
                    handleOnChange={handleOnChange}
                    value={name}
                    calories={
                      portionSize === "full"
                        ? full.calories
                        : half.calories
                    }
                    fat={portionSize === "full" ? full.fat : half.fat}
                    satFat={
                      portionSize === "full" ? full.satFat : half.satFat
                    }
                    chol={
                      portionSize === "full" ? full.chol : half.chol
                    }
                    sodium={
                      portionSize === "full" ? full.sodium : half.sodium
                    }
                    carbs={
                      portionSize === "full" ? full.carbs : half.carbs
                    }
                    fiber={
                      portionSize === "full" ? full.fiber : half.fiber
                    }
                    protein={
                      portionSize === "full"
                        ? full.protein
                        : half.protein
                    }
                    sugars={
                      portionSize === "full" ? full.sugars : half.sugars
                    }
                  ></Ingredient>
                );
              })}
            </div>
            <h5>
              <span>Pick a</span> Sauce.
            </h5>
            <div className="ingredients card-deck mb-4">              
              {filterCategory(ingredients, "Sauce").map(({ name, category, half, full }, index) => {
                return (
                  <Ingredient
                    id={`custom-checkbox-${index}`}
                    name={name}
                    key={name}
                    category={category}
                    handleOnChange={handleOnChange}
                    value={name}
                    calories={
                      portionSize === "full"
                        ? full.calories
                        : half.calories
                    }
                    fat={portionSize === "full" ? full.fat : half.fat}
                    satFat={
                      portionSize === "full" ? full.satFat : half.satFat
                    }
                    chol={
                      portionSize === "full" ? full.chol : half.chol
                    }
                    sodium={
                      portionSize === "full" ? full.sodium : half.sodium
                    }
                    carbs={
                      portionSize === "full" ? full.carbs : half.carbs
                    }
                    fiber={
                      portionSize === "full" ? full.fiber : half.fiber
                    }
                    protein={
                      portionSize === "full"
                        ? full.protein
                        : half.protein
                    }
                    sugars={
                      portionSize === "full" ? full.sugars : half.sugars
                    }
                  ></Ingredient>
                );
              })}
            </div>
            {/* <h5>
              <span>Choose your</span> cheese.
            </h5>
            <div className="ingredients card-deck mb-4">              
              {filterCategory(ingredients, "Cheese").map(({ name, category, half, full }, index) => {
                return (
                  <Ingredient
                    name={name}
                    key={index}
                    category={category}
                    calories={
                      portionSize === "full"
                        ? full.calories
                        : half.calories
                    }
                    fat={portionSize === "full" ? full.fat : half.fat}
                    satFat={
                      portionSize === "full" ? full.satFat : half.satFat
                    }
                    chol={
                      portionSize === "full" ? full.chol : half.chol
                    }
                    sodium={
                      portionSize === "full" ? full.sodium : half.sodium
                    }
                    carbs={
                      portionSize === "full" ? full.carbs : half.carbs
                    }
                    fiber={
                      portionSize === "full" ? full.fiber : half.fiber
                    }
                    protein={
                      portionSize === "full"
                        ? full.protein
                        : half.protein
                    }
                    sugars={
                      portionSize === "full" ? full.sugars : half.sugars
                    }
                  ></Ingredient>
                );
              })}
            </div> */}
          </section>
        </div>
        <div className="col-12 col-lg-3">
          <Calculator
            title="Nutrition Facts"
            subTitle="Items Selected"
            totals={totals}
          ></Calculator>
          {/* <button
            onClick={() =>
              UIStore.update((s) => {
                s.selectedIngredients = [];
              })
            }
            className="btn btn-secondary"
          >
            Reset
          </button> */}
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