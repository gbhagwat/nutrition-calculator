// const data = {
//   company: "Gusto",
//   slogan: "From Farm to Street",
// };

export function Header(props) {
    return (
      <header className="py-3">
        <h1 className="my-0 text-lowercase">{props.company}</h1>
        <span className="text-uppercase">{props.slogan}</span>
      </header>
    );
  }
  