export function Ingredients(props) {
    return (
      <div>
        <button
          className={`card px-3 py-2 mb-3 ${
            isSelected ? "Close Nutrition Facts" : "Open Nutrition Facts"
          }`}
          onClick={selected}
          onKeyDown={handleKeyPress}
          aria-label={`${
            active ? "Close Nutrition Facts" : "Open Nutrition Facts"
          }`}
        >
          <span className="font-italic">{props.category}</span>
          <h6>
            {props.name}
            <span
              className={` ${isShowFacts ? "minus" : ""},  ${
                !isShowFacts ? "plus" : ""
              } `}
              onMouseEnter={showFacts}
              onMouseLeave={showFacts}
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
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      isShowFacts = !isShowFacts;
    }
  }
  
  let isShowFacts = false;
  let isSelected = false;
  let active;

  function showFacts(){
    isShowFacts = !isShowFacts;
  }

  function selected(){
    isSelected = !isSelected;
  }