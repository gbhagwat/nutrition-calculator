import menuItems from "../Data/menuItems.json";
import { Header } from "../Components/Layout/Header";
import { Navigation } from "../Components/Layout/Navigation";
import { Jumbotron } from "../Components/Layout/Jumbotron";
import { Footer } from "../Components/Layout/Footer";
import { MenuItems } from "../Components/Nutrition/MenuItems";

let showSalads = false;
let showFlatbreads = true;

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
  console.log(array);
  var output = array.filter((item) => {
    return item.category === cat;
  });
  output.sort(compare);
  return output;
}

function flatbreadsShow() {
  showSalads = false;
  showFlatbreads = true;
}

function saladsShow() {
  showFlatbreads = false;
  showSalads = true;
}

function showAll() {
  showFlatbreads = true;
  showSalads = true;
}

export function NutritionInfo() {
  return (
    <>
      <div>
        <Header company="Gusto" slogan="From Farm to Street"></Header>
        <Navigation></Navigation>
        <Jumbotron
          title="Nutrition Information"
          content="See the facts for our specialty flatbreads and salads."
        ></Jumbotron>
        <div className="btn-group my-4">
          <button
            type="button"
            className={`btn btn-primary mr-1" ${showSalads ? "active" : ""}`}
            onClick={saladsShow}
          >
            Salads
          </button>
          <button
            type="button"
            className={`btn btn-primary mr-1" ${
              showFlatbreads ? "active" : ""
            }`}
            onClick={flatbreadsShow}
          >
            Flatbreads
          </button>
          <button
            type="button"
            className={`btn btn-primary mr-1" ${
              showSalads && showFlatbreads ? "active" : ""
            }`}
            onClick={showAll}
          >
            All
          </button>
        </div>
        {showSalads && (
          <div>
            <h3>Salads</h3>
            <div className="p-3 mb-3">
              <div className="card-deck">
                {filterCategory(menuItems, "Salad").map(
                  (item, index) => (
                    <MenuItems
                      key={index}
                      name={item.name}
                      calories={item.calories}
                      fat={item.fat}
                      satFat={item.satFat}
                      chol={item.chol}
                      sodium={item.sodium}
                      carbs={item.carbs}
                      fiber={item.fiber}
                      protein={item.protein}
                      sugars={item.sugars}
                      serving={item.serving}
                    ></MenuItems>
                  )
                )}
              </div>
            </div>
          </div>
        )}
        {showFlatbreads && (
          <div>
            <h3>Flatbreads</h3>
            <div className="p-3 mb-3">
              <div className="card-deck">
                {filterCategory(menuItems, "Flatbread").map(
                  (item, index) => (
                    <MenuItems
                      key={index}
                      name={item.name}
                      calories={item.calories}
                      fat={item.fat}
                      satFat={item.satFat}
                      chol={item.chol}
                      sodium={item.sodium}
                      carbs={item.carbs}
                      fiber={item.fiber}
                      protein={item.protein}
                      sugars={item.sugars}
                      serving={item.serving}
                    ></MenuItems>                    
                  )
                )}
              </div>
            </div>
          </div>
        )}
        <Footer></Footer>
      </div>
    </>
  );
}
