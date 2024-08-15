export function Ingredient(props, {checked}) {

  return (
    <div className='card'>
      <div className="card-body">
        <input
          type="checkbox"
          name={props.name}
          value={props.name}
          checked={checked}
          onChange={props.handleOnChange}
          defaultChecked={false}
        />        
        <div className="card-title">
          <h6>
            {props.name} <span className="italic">{props.category}</span>
          </h6>
        </div>
        <dl className="grid grid-cols-2 w-36rem px-2 py-3">
          <dt className="text-left">Calories</dt>
          <dd className="col text-sm-right">{props.calories}</dd>
          <dt className="text-left">Total Fat(g)</dt>
          <dd className="col text-sm-right">{props.fat}</dd>
          <dt className="text-left">Saturated Fat(g)</dt>
          <dd className="col text-sm-right">{props.satFat}</dd>
          <dt className="text-left">Cholesterol(mg)</dt>
          <dd className="col text-sm-right">{props.chol}</dd>
          <dt className="text-left">Sodium(mg)</dt>
          <dd className="col text-sm-right">{props.sodium}</dd>
          <dt className="text-left">Carbs(g)</dt>
          <dd className="col text-sm-right">{props.carbs}</dd>
          <dt className="text-left">Fiber(g)</dt>
          <dd className="col text-sm-right">{props.fiber}</dd>
          <dt className="text-left">Protein(g)</dt>
          <dd className="col text-sm-right">{props.protein}</dd>
          <dt className="text-left">Sugars(g)</dt>
          <dd className="col text-sm-right">{props.sugars}</dd>
        </dl>        
      </div>            
    </div>
  );
}
