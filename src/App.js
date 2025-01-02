import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Map from "./components/Map";

function Home() {
  return (
    <div className="body">
      <div className="App">
        <div className="Title">Geoportal</div>
        <div className="Subtitle">
          Drogi przenikania granicy polsko-białoruskiej przez nielegalnych
          imigrantów
        </div>
        <Link to="/map">
          <button className="Button1">Mapa</button>
        </Link>
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
      </Routes>
    </Router>
  );
}

export default App;
