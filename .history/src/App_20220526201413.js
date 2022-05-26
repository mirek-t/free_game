import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import GameDetails from "./components/gameDetails/GameDetails";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
