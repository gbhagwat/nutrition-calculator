import menuItems from "../Data/menuItems.json";
import { Header } from "../Components/Layout/Header";
import { Navigation } from "../Components/Layout/Navigation";
import { Jumbotron } from "../Components/Layout/Jumbotron";
import { Footer } from "../Components/Layout/Footer";
import { MenuItems } from "../Components/Nutrition/MenuItems";
import { UIStore } from "../App/store";

export function NutritionInfo() {

  let showFlatbreads = UIStore.useState(s => s.showFlatbreads);
  let showSalads = UIStore.useState(s => s.showSalads);

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
            onClick={() => UIStore.update(saladsShow)}
          >
            Salads
          </button>
          <button
            type="button"
            className={`btn btn-primary mr-1" ${
              showFlatbreads ? "active" : ""
            }`}
            onClick={() => UIStore.update(flatbreadsShow)}
          >
            Flatbreads
          </button>
          <button
            type="button"
            className={`btn btn-primary mr-1" ${
              showSalads && showFlatbreads ? "active" : ""
            }`}
            onClick={() => UIStore.update(showAll)}
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
  var output = array.filter((item) => {
    return item.category === cat;
  });
  output.sort(compare);
  return output;
}

function flatbreadsShow(s) {
  s.showSalads = false;
  s.showFlatbreads = true;
}

function saladsShow(s) {
  s.showFlatbreads = false;
  s.showSalads = true;
}

function showAll(s) {
  s.showFlatbreads = true;
  s.showSalads = true;
}


