import { UIStore } from "../../App/store";

export default function ServingBtn() {

  let showFullFacts = UIStore.useState(s => s.showFullFacts);
  let showHalfFacts = UIStore.useState(s => s.showHalfFacts);

  return (
    <div>
      <button
        type="button"
        className={`btn btn-primary mr-1  ${showFullFacts ? "active" : ""}`}
        onClick={() => UIStore.update(showFullIng)}
      >
        Full-Size
      </button>
      <button
        type="button"
        className={`btn btn-primary mr-1  ${showHalfFacts ? "active" : ""}`}
        onClick={() => UIStore.update(showHalfIng)}
      >
        Half-Size
      </button>
    </div>
  );
}

function showHalfIng(s) {
  s.showHalfFacts = false;
  s.showFullFacts = true;
  s.changePortionSize("half")
}

function showFullIng(s) {
  s.showHalfFacts = false;
  s.showFullFacts = true;
  s.changePortionSize("full")
}
