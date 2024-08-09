import { useDispatch } from "react-redux";
import { changePortionSize } from "../../App/PortionSizeSlice";

let showFullFacts = true;
let showHalfFacts = false;

function showHalfIng(dispatch) {
  showHalfFacts = true;
  showFullFacts = false;
  dispatch(changePortionSize("half"));
}

function showFullIng(dispatch) {
  showHalfFacts = false;
  showFullFacts = true;
  dispatch(changePortionSize("full"));
}

export default function ServingBtn() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        className={`btn btn-primary mr-1  ${showFullFacts ? "active" : ""}`}
        onClick={showFullIng(dispatch)}
      >
        Full-Size
      </button>
      <button
        type="button"
        className={`btn btn-primary mr-1  ${showHalfFacts ? "active" : ""}`}
        onClick={showHalfIng(dispatch)}
      >
        Half-Size
      </button>
    </div>
  );
}
