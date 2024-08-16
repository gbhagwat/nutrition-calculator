import { UIStore } from "../../App/store";

export function Calculator(props) {
  let totals = UIStore.useState((s) => s.totals);
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
        {/* <div className="card">
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
        </div> */}
      </div>
    );
  }
  
  // function removeTag(name, {selectedIngredients}) {
  //   let filtered = selectedIngredients.filter(function (value) {
  //     return value !== name;
  //   });
  //   selectedIngredients = filtered;
  // }