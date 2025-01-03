import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Map from "./components/Map";
import About from "./components/About";
import Tlo from "./components/obrazy/tlo.jpg";
function Home() {
  return (
    <div className="body">
      <div className="App">
        <div className="Title">Geoportal</div>
        <div className="Subtitle">
          Drogi przenikania granicy polsko-białoruskiej przez nielegalnych
          imigrantów
        </div>
        <img className="Background" src={Tlo}></img>
        <div className="ButtonContainer">
          <Link to="/map">
            <button className="Button1">Mapa</button>
          </Link>
          <Link to="about">
            <button className="Button2">O projekcie</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
