import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { Link } from "react-router-dom";

function Map() {
  return (
    <div className="map-container">
      <h1 className="map-title">Mapa Geoportalu</h1>
      <MapContainer
        center={[52.237049, 21.017532]}
        zoom={7}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
      <Link to="/">
        <button className="button">Powrót </button>
      </Link>

      <p className="map-description">
        Interaktywna mapa przedstawiająca przenikanie granicy .
      </p>
    </div>
  );
}

export default Map;
