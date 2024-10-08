import { Header } from "../Components/Layout/Header";
import { Navigation } from "../Components/Layout/Navigation";
import { Jumbotron } from "../Components/Layout/Jumbotron";
import { Footer } from "../Components/Layout/Footer";

export function Home() {
  return (
    <>
      <Header company="Gusto" slogan="From Farm to Street"></Header>
      <Navigation></Navigation>
      <Jumbotron title="FAST FIRED PIZZAS & FARM FRESH SALADS"></Jumbotron>
      <div className="row justify-content-center p-5">
        <div className="grid grid-cols-1">
          <p>
            Our founder developed Gusto Farm to Street around his experience
            growing up on his family’s farm in Pennsylvania.
          </p>
          <blockquote className="font-weight-bold">
            AS A YOUNG BOY, HE LEARNED THAT HARD WORK WAS REWARDED WITH HEALTHY,
            HEARTY MEALS - STRAIGHT FROM THE FARM.
          </blockquote>
          <p>
            After moving to New York City, Gusto's founder’s budding passion
            turned to the emerging food scene. He became obsessed with the idea
            of receiving a fast, fresh, healthy meal at a reasonable price and
            felt that with the right team he could execute it better than anyone
            else.
          </p>
          <blockquote className="font-weight-bold">
            THIS PASSION EVENTUALLY GREW INTO AN IDEA FOR A GATHERING PLACE
            WHERE LIKE-MINDED INDIVIDUALS COULD MEET TO ENJOY AMAZING FOOD IN A
            UNIQUE ENVIRONMENT.
          </blockquote>
          <p>
            Gusto’s menu has been carefully crafted by our award winning chef
            with casual offerings that best utilize healthy grains and greens,
            hormone and antibiotic free meats, as well as fresh, locally sourced
            produce and ingredient when available. With scratch kitchens to
            complement our vibrant farm-to-table flavors, we always strive to
            offer our guests an unparalleled dining experience.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
