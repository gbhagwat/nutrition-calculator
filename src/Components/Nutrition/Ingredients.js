import { UIStore } from "../../App/store";

export function Ingredients(props) {

  let isShowFacts = UIStore.useState(s => s.isShowFacts);
  let isSelected = UIStore.useState(s => s.isSelected);
  let isActive = UIStore.useState(s => s.isActive);

    return (
      <div>
        <button
          className={`card px-3 py-2 mb-3 ${
            isSelected ? "Close Nutrition Facts" : "Open Nutrition Facts"
          }`}
          onClick={() =>
            UIStore.update(s => {
              s.isSelected = !s.isSelected;
            })}          
          onKeyDown={() => UIStore.update(handleKeyPress)}
          aria-label={`${
            isActive ? "Close Nutrition Facts" : "Open Nutrition Facts"
          }`}
        >
          <span className="font-italic">{props.category}</span>
          <h6>
            {props.name}
            <span
              className={` ${isShowFacts ? "minus" : ""},  ${
                !isShowFacts ? "plus" : ""
              } `}
              aria-label={`${
                isShowFacts ? "Close Nutrition Facts" : "Open Nutrition Facts"
              }`}
              title={`${
                isShowFacts ? "Close Nutrition Facts" : "Open Nutrition Facts"
              }`}
            ></span>
          </h6>
          {isShowFacts && (
            <dl className="row justify-content-center px-2 py-3">
              <dt className="col-2 col-sm-auto text-left">Calories</dt>
              <dd className="col text-sm-right">{props.calories}</dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Total Fat(g)</dt>
              <dd className="col text-sm-right">{props.fat}</dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Saturated Fat(g)</dt>
              <dd className="col text-sm-right">{props.satFat}</dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Cholesterol(mg)</dt>
              <dd className="col text-sm-right">{props.chol}</dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Sodium(mg)</dt>
              <dd className="col text-sm-right">{props.sodium}</dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Carbs(g)</dt>
              <dd className="col text-sm-right">{props.carbs}</dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Fiber(g)</dt>
              <dd className="col text-sm-right">{props.fiber}</dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Protein(g)</dt>
              <dd className="col text-sm-right">{props.protein}</dd>
              <div className="w-100"></div>
              <dt className="col-2 col-sm-auto text-left">Sugars(g)</dt>
              <dd className="col text-sm-right">{props.sugars}</dd>
            </dl>
          )}
        </button>
      </div>
    );
  }