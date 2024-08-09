export function MenuItems(props) {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">{props.name}</h4>
            <p className="text-small mt-2 font-italic">
              {props.serving}
              <span>{props.crust}</span>
            </p>
          </div>
          <div className="card-body container">
            <dl className="row">
              <dt className="col-3 col-sm-auto text-left">Calories</dt>
              <dd className="col text-sm-right">{props.calories}</dd>
              <div className="w-100"></div>
              <dt className="col-3 col-sm-auto text-left">Total Fat(g)</dt>
              <dd className="col text-sm-right">{props.fat}</dd>
              <div className="w-100"></div>
              <dt className="col-3 col-sm-auto text-left">Saturated Fat(g)</dt>
              <dd className="col text-sm-right">{props.satFat}</dd>
              <div className="w-100"></div>
              <dt className="col-3 col-sm-auto text-left">Cholesterol(mg)</dt>
              <dd className="col text-sm-right">{props.chol}</dd>
              <div className="w-100"></div>
              <dt className="col-3 col-sm-auto text-left">Sodium(mg)</dt>
              <dd className="col text-sm-right">{props.sodium}</dd>
              <div className="w-100"></div>
              <dt className="col-3 col-sm-auto text-left">Carbs(g)</dt>
              <dd className="col text-sm-right">{props.carbs}</dd>
              <div className="w-100"></div>
              <dt className="col-3 col-sm-auto text-left">Fiber(g)</dt>
              <dd className="col text-sm-right">{props.fiber}</dd>
              <div className="w-100"></div>
              <dt className="col-3 col-sm-auto text-left">Protein(g)</dt>
              <dd className="col text-sm-right">{props.protein}</dd>
              <div className="w-100"></div>
              <dt className="col-3 col-sm-auto text-left">Sugars(g)</dt>
              <dd className="col text-sm-right">{props.sugars}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
  