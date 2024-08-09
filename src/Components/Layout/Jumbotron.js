import "../../Assets/Styles/layouts.css";

// const data = {
//   title: "FAST FIRED PIZZAS & FARM FRESH SALADS",
// };

export function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <div className="intro">
        <p className="lead font-italic">{props.title}</p>
      </div>
    </div>
  );
}
