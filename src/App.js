import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Map from "./components/Map";
import About from "./components/About";
import Security from "./components/Straz";
import Data from "./components/Data";
import Tlo from "./components/obrazy/tlo.jpg";
import Map_icon from "./components/obrazy/mapa.png";
import About_icon from "./components/obrazy/mark.png";
import Data_icon from "./components/obrazy/dane.png";
import Guard_icon from "./components/obrazy/tower.png";

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
          <Link to="/map" className="ButtonWithIcon">
            <div className="IconContainer">
              <img className="Map_icon" src={Map_icon} alt="Ikona mapy" />
            </div>
            <button className="Button1">Mapa</button>
          </Link>

          <div className="ButtonContainer">
            <Link to="/about" className="ButtonWithIcon">
              <div className="IconContainer">
                <img
                  className="About_icon"
                  src={About_icon}
                  alt="Ikona o projekcie"
                />
              </div>
              <button className="Button2">O projekcie</button>
            </Link>
          </div>

          <Link to="/data" className="ButtonWithIcon">
            <div className="IconContainer">
              <img className="Data_icon" src={Data_icon} alt="Ikona danych" />
            </div>
            <button className="Button3">O danych</button>
          </Link>

          <Link to="/security" className="ButtonWithIcon">
            <div className="IconContainer">
              <img
                className="Guard_icon"
                src={Guard_icon}
                alt="Ikona straży granicznej"
              />
            </div>
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
