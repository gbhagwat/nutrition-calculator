import { Link } from "react-router-dom";

const links = [
  { title: "Home", url: "/", id: 1 },
  { title: "Menu", url: "/menu", id: 2 },
  { title: "Nutrition Information", url: "/nutrition-info", id: 3 },
  { title: "Calculate Your Plate", url: "/calculate-your-plate", id: 4 },
];

const linkItems = links.map((link) => (
  <li key={link.id}>
    <Link to={link.url}>{link.title}</Link>
  </li>
));

export function Navigation() {
  return (
    <nav className="mt-3">
      <ul>{linkItems}</ul>
    </nav>
  );
}
