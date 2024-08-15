// import ingredients from "../../Data/ingredients.json";
export function Calculator(props) {
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
                {props.totals.calories}
              </dd>
              <dt className="text-left">Total Fat(g)</dt>
              <dd className="col text-sm-right">
                {props.totals.fat}
              </dd>
              <dt className="text-left">Saturated Fat(g)</dt>
              <dd className="col text-sm-right">
                {props.totals.satFat}
              </dd>
              <dt className="text-left">Cholesterol(mg)</dt>
              <dd className="col text-sm-right">
                {props.totals.chol}
              </dd>
              <dt className="text-left">Sodium(mg)</dt>
              <dd className="col text-sm-right">
                {props.totals.sodium}
              </dd>
              <dt className="text-left">Carbs(g)</dt>
              <dd className="col text-sm-right">
                {props.totals.carbs}
              </dd>
              <dt className="text-left">Fiber(g)</dt>
              <dd className="col text-sm-right">
                {props.totals.fiber}
              </dd>
              <dt className="text-left">Protein(g)</dt>
              <dd className="col text-sm-right">
                {props.totals.protein}
              </dd>
              <dt className="text-left">Sugars(g)</dt>
              <dd className="col text-sm-right">
                {props.totals.sugars}
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
              {props.selectedIngredients.map((name, index) => (
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
  
  function removeTag(name, props) {
    let filtered = props.selectedIngredients.filter(function (value) {
      return value !== name;
    });
    props.selectedIngredients = filtered;
  }