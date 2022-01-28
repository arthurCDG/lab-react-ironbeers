import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Beers from "./pages/Beers";
import HomePage from "./pages/HomePage";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/random" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
