import {store} from "../../App/store";
import { changePortionSize } from "../../App/PortionSizeSlice";

let showFullFacts = true;
let showHalfFacts = false;

function showHalfIng() {
  showHalfFacts = true;
  showFullFacts = false;
  store.dispatch(changePortionSize("half"));
}

function showFullIng() {
  showHalfFacts = false;
  showFullFacts = true;
  store.dispatch(changePortionSize("full"));
}

export default function ServingBtn() {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-primary mr-1  ${showFullFacts ? "active" : ""}`}
        onClick={showFullIng()}
      >
        Full-Size
      </button>
      <button
        type="button"
        className={`btn btn-primary mr-1  ${showHalfFacts ? "active" : ""}`}
        onClick={showHalfIng()}
      >
        Half-Size
      </button>
    </div>
  );
}
