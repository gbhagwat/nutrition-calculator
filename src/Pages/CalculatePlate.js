import { UIStore } from "../App/store";
import { Header } from "../Components/Layout/Header";
import { Jumbotron } from "../Components/Layout/Jumbotron";
import { Navigation } from "../Components/Layout/Navigation";
import { Footer } from "../Components/Layout/Footer";
import BuildPizza from "../Pages/BuildPizza";
import BuildSalad from "../Pages/BuildSalad";
import ServingBtn from "../Components/Nutrition/ServingBtn";

export function CalculatePlate() {

  let showFlatbread = UIStore.useState(s => s.showFlatbread);
  let showSalad = UIStore.useState(s => s.showSalad);
    
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
            className={`btn btn-primary mr-1 ${showFlatbread ? "active" : ""}`}
            onClick={() => UIStore.update(showFlatbreadInfo)}
          >
            Flatbread
          </button>
          <button
            type="button"
            className={`btn btn-primary mr-5 ${showSalad ? "active" : ""}`}
            onClick={() => UIStore.update(showSaladInfo)}
          >
            Salad
          </button>
          <ServingBtn></ServingBtn>
        </div>

        {showFlatbread && <BuildPizza></BuildPizza>}
        {showSalad && <BuildSalad></BuildSalad>}
      </div>

      <Footer></Footer>
    </div>
  );
}

function showFlatbreadInfo(s) {
  s.showFlatbread = true;
  s.showSalad = false;
  s.foodType = "Flatbread";
  s.selectedIngredients = [];
}

function showSaladInfo(s) {
  s.showFlatbread = false;
  s.showSalad = true;
  s.foodType = "Salad"
  s.selectedIngredients = [];
}
