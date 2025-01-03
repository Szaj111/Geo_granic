import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Map from "./components/Map";
import About from "./components/About";
import Security from "./components/Straz";
import Data from "./components/Data";
import Tlo from "./components/obrazy/tlo.jpg";

function Home() {
  return (
    <div className="App">
      <div className="Title">Geoportal</div>
      <div className="Subtitle">
        Drogi przenikania granicy polsko-białoruskiej przez nielegalnych
        imigrantów
      </div>
      <div className="Container">
        <img className="Background" src={Tlo} alt="Tło Geoportalu" />
        <div className="ButtonContainer">
          <Link to="/map">
            <button className="Button1">Mapa</button>
          </Link>
          <Link to="/about">
            <button className="Button2">O projekcie</button>
          </Link>
          <Link to="/data">
            <button className="Button3">O danych</button>
          </Link>
          <Link to="/security">
            <button className="Button4">Straż graniczna</button>
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
        <Route path="/data" element={<Data />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </Router>
  );
}

export default App;
