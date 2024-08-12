import ingredients from "../../Data/ingredients.json";
import { useMemo } from "react";
import { UIStore } from "../../App/store";

export function Calculator(props) {
 let facts = UIStore.useState(s => s.facts);
 let portionSize = UIStore.useState(s => s.portionSize);
 let selectedIngredients = props.selectedIngredients;

  const totals = useMemo(() => {
    let totalCal = facts.calories;
    let totalFat = facts.fat;
    let totalSatFat = facts.satFat;
    let totalChol = facts.chol;
    let totalSodium = facts.sodium;
    let totalCarbs = facts.carbs;
    let totalFiber = facts.fiber;
    let totalProtein = facts.protein;
    let totalSugars = facts.sugars;
  
    ingredients.forEach(function (ing) {
      if (selectedIngredients.indexOf(ing.name) > -1) {
        if (portionSize === "half") {
          facts.calories = totalCal += ing.half.calories;
          facts.fat = totalFat += ing.half.fat;
          facts.satFat = totalSatFat += ing.half.satFat;
          facts.chol = totalChol + ing.half.chol;
          facts.sodium = totalSodium + ing.half.sodium;
          facts.carbs = totalCarbs + ing.half.carbs;
          facts.fiber = totalFiber + ing.half.fiber;
          facts.protein = totalProtein + ing.half.protein;
          facts.sugars = totalSugars + ing.half.sugars;
        } else {
          facts.calories = totalCal += ing.full.calories;
          facts.fat = totalFat += ing.full.fat;
          facts.satFat = totalSatFat += ing.full.satFat;
          facts.chol = totalChol += ing.full.chol;
          facts.sodium = totalSodium += ing.full.sodium;
          facts.carbs = totalCarbs += ing.full.carbs;
          facts.fiber = totalFiber += ing.full.fiber;
          facts.protein = totalProtein += ing.full.protein;
          facts.sugars = totalSugars += ing.full.sugars;
        }
      }
    });
    return facts;
  }, [facts, selectedIngredients, portionSize]);

    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">{props.title}</h4>
          </div>
          <div className="card-body">
            <dl className="row justify-content-center px-2 py-3">
              <dt className="text-left">Calories</dt>
              <dd className="col text-sm-right">
                {totals.calories}
              </dd>
              <dt className="text-left">Total Fat(g)</dt>
              <dd className="col text-sm-right">
                {totals.fat}
              </dd>
              <dt className="text-left">Saturated Fat(g)</dt>
              <dd className="col text-sm-right">
                {totals.satFat}
              </dd>
              <dt className="text-left">Cholesterol(mg)</dt>
              <dd className="col text-sm-right">
                {totals.chol}
              </dd>
              <dt className="text-left">Sodium(mg)</dt>
              <dd className="col text-sm-right">
                {totals.sodium}
              </dd>
              <dt className="text-left">Carbs(g)</dt>
              <dd className="col text-sm-right">
                {totals.carbs}
              </dd>
              <dt className="text-left">Fiber(g)</dt>
              <dd className="col text-sm-right">
                {totals.fiber}
              </dd>
              <dt className="text-left">Protein(g)</dt>
              <dd className="col text-sm-right">
                {totals.protein}
              </dd>
              <dt className="text-left">Sugars(g)</dt>
              <dd className="col text-sm-right">
                {totals.sugars}
              </dd>
            </dl>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">{props.subTitle}</h4>
          </div>
          <div className="card-body">
            <ul>
              {selectedIngredients.map((name, index) => (
                <li className="tags" key={index}>
                  {name}
                  <span
                    onClick={removeTag(name)}
                    className="float-right mr-1"
                  >
                    x
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  function removeTag(name, selectedIngredients) {
    let filtered = selectedIngredients.filter(function (value) {
      return value !== name;
    });
    selectedIngredients = filtered;
  }