import ingredients from "../Data/ingredients.json";
import { UIStore } from "../App/store";
import { Ingredient } from "../Components/Nutrition/Ingredient";
import { Calculator } from "../Components/Nutrition/Calculator";
import { useMemo } from "react";

export default function BuildPizza() {
  let portionSize = UIStore.useState((s) => s.portionSize);
  let foodType = UIStore.useState((s) => s.foodType);
  let selectedIngredients = UIStore.useState((s) => s.selectedIngredients);

  const totals = useMemo(() => {
    let facts = {};
  
      return selectedIngredients.map((ing) => {
        if (portionSize === "half") {
          facts.calories = facts.calories += ing.half.calories;
          facts.fat = facts.fat += ing.half.fat;
          facts.satFat =  facts.satFat  += ing.half.satFat;
          facts.chol = facts.chol  + ing.half.chol;
          facts.sodium = facts.sodium + ing.half.sodium;
          facts.carbs = facts.carbs + ing.half.carbs;
          facts.fiber = facts.fiber + ing.half.fiber;
          facts.protein = facts.protein + ing.half.protein;
          facts.sugars = facts.sugars + ing.half.sugars; 
      } 
      if (portionSize === "full") {
          facts.calories = facts.calories += ing.full.calories;
          facts.fat = facts.fat += ing.full.fat;
          facts.satFat = facts.satFat += ing.full.satFat;
          facts.chol = facts.chol  += ing.full.chol;
          facts.sodium = facts.sodium += ing.full.sodium;
          facts.carbs = facts.carbs += ing.full.carbs;
          facts.fiber = facts.fiber += ing.full.fiber;
          facts.protein = facts.protein += ing.full.protein;
          facts.sugars = facts.sugars += ing.full.sugars;
      } 
        return facts;
      })    
    }, [selectedIngredients, portionSize]);


  const handleOnChange = (e) => {
    let isChecked = e.target.checked;

    if(isChecked) {
      selectedIngredients = [...selectedIngredients, e.target.value]
      console.log(selectedIngredients)
    } else {
      let index = selectedIngredients.indexOf(e.target.value);
      selectedIngredients.splice(index, 1);
      console.log(selectedIngredients)
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
            selectedIngredients={selectedIngredients}
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