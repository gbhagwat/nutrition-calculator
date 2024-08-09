import { Header } from "../Components/Layout/Header";
import { Navigation } from "../Components/Layout/Navigation";
import { Jumbotron } from "../Components/Layout/Jumbotron";
import { Footer } from "../Components/Layout/Footer";

export function Menu() {
  return (
    <>
      <Header company="Gusto" slogan="From Farm to Street"></Header>
      <Navigation></Navigation>
      <Jumbotron
        title="Restaurant Menu"
        content="Enjoy a healthy meal using the highest quality ingredients."
      ></Jumbotron>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-8"></div>
      </div>
      <Footer></Footer>
    </>
  );
}
