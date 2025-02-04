import React from "react";
import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  LayersControl,
} from "react-leaflet";
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

        <LayersControl position="topright">
          <LayersControl.Overlay name="Security">
            <WMSTileLayer
              url="http://localhost:8080/geoserver/wms"
              layers="prge:Security1"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Hide">
            <WMSTileLayer
              url="http://localhost:8080/geoserver/wms"
              layers="prge:Hide1"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Walk">
            <WMSTileLayer
              url="http://localhost:8080/geoserver/wms"
              layers="prge:Walk1"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      <Link to="/">
        <button className="button">Powrót</button>
      </Link>

      <p className="map-description">
        Mapa z kryteriami trudności przenikalności
      </p>
    </div>
  );
}

export default Map;
