import { Header } from "../Components/Layout/Header";
import { Jumbotron } from "../Components/Layout/Jumbotron";
import { Navigation } from "../Components/Layout/Navigation";
import { Footer } from "../Components/Layout/Footer";
import BuildPizza from "../Pages/BuildPizza";
import BuildSalad from "../Pages/BuildSalad";
import ServingBtn from "../Components/Nutrition/ServingBtn";
import { useDispatch } from "react-redux";
import { changeFoodType } from "../App/FoodTypeSlice";
import { resetIngredients } from "../App/SelectedIngredientsSlice";

export function CalculatePlate() {
  const dispatch = useDispatch();
  let showPizza = true;
  let showSalad = false;

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
            onClick={showPizzaInfo(showPizza, showSalad, dispatch)}
          >
            Flatbread
          </button>
          <button
            type="button"
            className={`btn btn-primary mr-5 ${showSalad ? "active" : ""}`}
            onClick={showSaladInfo(showPizza, showSalad, dispatch)}
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

function showPizzaInfo(showPizza, showSalad, dispatch) {
  showPizza = true;
  showSalad = false;
  dispatch(changeFoodType("Flatbread"));
  reset(dispatch);
}

function showSaladInfo(showPizza, showSalad, dispatch) {
  showPizza = false;
  showSalad = true;
  dispatch(changeFoodType("Salad"));
  reset(dispatch);
}

function reset(dispatch) {
  dispatch(resetIngredients);
  //   this.$refs.ing.forEach(function (el) {
  //     return (el.isSelected = false);
  //   });
}
