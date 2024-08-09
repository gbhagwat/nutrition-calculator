import {store} from "../App/store";
import { Header } from "../Components/Layout/Header";
import { Jumbotron } from "../Components/Layout/Jumbotron";
import { Navigation } from "../Components/Layout/Navigation";
import { Footer } from "../Components/Layout/Footer";
import BuildPizza from "../Pages/BuildPizza";
import BuildSalad from "../Pages/BuildSalad";
import ServingBtn from "../Components/Nutrition/ServingBtn";
import { changeFoodType } from "../App/FoodTypeSlice";
import { resetIngredients } from "../App/SelectedIngredientsSlice";

let showPizza = true;
let showSalad = false;

export function CalculatePlate() {

  return (
    <div>
      <Header company="Gusto" slogan="From Farm to Street"></Header>
      <Navigation></Navigation>
      <Jumbotron
        title="Calculate Your Plate"
        content="Select from the following ingredients for more accurate nutrition information when crafting your own."
      ></Jumbotron>

      <div className="px-5 py-3">
        <div className="btn-group my-4 pb-3">
          <button
            type="button"
            className={`btn btn-primary mr-1 ${showPizza ? "active" : ""}`}
            onClick={() => showPizzaInfo(showPizza, showSalad)}
          >
            Flatbread
          </button>
          <button
            type="button"
            className={`btn btn-primary mr-5 ${showSalad ? "active" : ""}`}
            onClick={() => showSaladInfo(showPizza, showSalad)}
          >
            Salad
          </button>
          <ServingBtn></ServingBtn>
        </div>

        {showPizza && <BuildPizza></BuildPizza>}
        {showSalad && <BuildSalad></BuildSalad>}
      </div>

      <Footer></Footer>
    </div>
  );
}

function showPizzaInfo() {
  showPizza = true;
  showSalad = false;
  store.dispatch(changeFoodType("Flatbread"));
  reset();
}

function showSaladInfo() {
  showPizza = false;
  showSalad = true;
  store.dispatch(changeFoodType("Salad"));
  reset();
}

function reset() {
  store.dispatch(resetIngredients);
  //   this.$refs.ing.forEach(function (el) {
  //     return (el.isSelected = false);
  //   });
}
