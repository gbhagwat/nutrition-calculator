import ingredients from "../../Data/ingredients.json";
import { useSelector } from "react-redux";

export function Calculator(props) {
    let selectedIngredients = useSelector((state) => state.selectedIngredients);

    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">{props.title}</h4>
          </div>
          <div className="card-body">
            <dl className="row justify-content-center px-2 py-3">
              <dt className="col-2 col-sm-auto text-left">Calories</dt>
              <dd className="col text-sm-right">
                {totals.calories > 0 ? totals.calories : "0"}
              </dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Total Fat(g)</dt>
              <dd className="col text-sm-right">
                {totals.fat > 0 ? totals.fat : "0"}
              </dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Saturated Fat(g)</dt>
              <dd className="col text-sm-right">
                {totals.satFat > 0 ? totals.satFat : "0"}
              </dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Cholesterol(mg)</dt>
              <dd className="col text-sm-right">
                {totals.chol > 0 ? totals.chol : "0"}
              </dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Sodium(mg)</dt>
              <dd className="col text-sm-right">
                {totals.sodium > 0 ? totals.sodium : "0"}
              </dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Carbs(g)</dt>
              <dd className="col text-sm-right">
                {totals.carbs > 0 ? totals.carbs : "0"}
              </dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Fiber(g)</dt>
              <dd className="col text-sm-right">
                {totals.fiber > 0 ? totals.fiber : "0"}
              </dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Protein(g)</dt>
              <dd className="col text-sm-right">
                {totals.protein > 0 ? totals.protein : "0"}
              </dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Sugars(g)</dt>
              <dd className="col text-sm-right">
                {totals.sugar > 0 ? totals.sugar : "0"}
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
              {selectedIngredients.map((ingredient, index) => (
                <li className="tags" key={index}>
                  {ingredient.name}
                  <span
                    onClick={removeTag(selectedIngredients, ingredient.name)}
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
  
  function removeTag(selectedIngredients, name) {
    let filtered = selectedIngredients.filter(function (value) {
      return value !== name;
    });
    selectedIngredients = filtered;
  }
  
  function totals(calories, fat, satFat, chol, sodium, carbs, fiber, protein, sugars, selectedIngredients, portionSize) {
    let facts = {};
    let totalCal = calories;
    let totalFat = fat;
    let totalSatFat = satFat;
    let totalChol = chol;
    let totalSodium = sodium;
    let totalCarbs = carbs;
    let totalFiber = fiber;
    let totalProtein = protein;
    let totalSugars = sugars;
  
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
  }
  