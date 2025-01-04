import React from "react";
import "./Straz.css";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.css";
import { Link } from "react-router-dom";

function Straz() {
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
        Mapa przedstawiająca rozmieszczenie Posterunków Straży Granicznej oraz
        przejść granicznych .
      </p>
    </div>
  );
}

export default Straz;
