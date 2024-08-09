import { Home } from "../src/Pages/Home";
import { Menu } from "../src/Pages/Menu";
import { NutritionInfo } from "../src/Pages/NutritionInfo";
import { CalculatePlate } from "../src/Pages/CalculatePlate";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nutrition-info" element={<NutritionInfo />} />
        <Route path="/calculate-your-plate" element={<CalculatePlate />} />
      </Routes>
    </div>
  );
}
