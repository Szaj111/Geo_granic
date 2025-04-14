import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  LayersControl,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Map() {
  const [drogiData, setDrogiData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/geoserver/konieccc/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=konieccc:drogaaaaaaaaaaaaaaaa&maxFeatures=50&outputFormat=application/json"
      )
      .then((res) => {
        setDrogiData(res.data);
      })
      .catch((err) => {
        console.error("Błąd pobierania GeoJSON:", err);
      });
  }, []);

  return (
    <div className="map-container">
      <h1 className="map-title">Mapa Geoportalu</h1>
      <MapContainer
        center={[52.2370492, 23.0175322]}
        zoom={7}
        style={{ height: "650px", width: "100%" }}
      >
        {/* Podkład mapowy */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <LayersControl position="topright">
          {/* Warstwy rastrowe z GeoServera */}
          <LayersControl.Overlay name="Walk">
            <WMSTileLayer
              url="http://localhost:8080/geoserver/konieccc/wms"
              layers="konieccc:walkkkkkkk"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Hide">
            <WMSTileLayer
              url="http://localhost:8080/geoserver/konieccc/wms"
              layers="konieccc:hideeee"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Security">
            <WMSTileLayer
              url="http://localhost:8080/geoserver/konieccc/wms"
              layers="konieccc:seucirty"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Przenikalność terenu">
            <WMSTileLayer
              url="http://localhost:8080/geoserver/konieccc/wms"
              layers="konieccc:przenikalnosct"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>

          {drogiData && (
            <LayersControl.Overlay name="Drogi ">
              <GeoJSON
                data={drogiData}
                style={{ color: "blue", weight: 3 }}
                onEachFeature={(feature, layer) => {
                  const props = feature.properties;
                  layer.bindPopup(
                    props.nazwa
                      ? `<b>Droga:</b> ${props.nazwa}`
                      : "Droga (brak nazwy)"
                  );
                }}
              />
            </LayersControl.Overlay>
          )}
        </LayersControl>
      </MapContainer>

      <Link to="/">
        <button className="button">Powrót</button>
      </Link>

      <p className="map-description">Mapa przenikalności terenu</p>
    </div>
  );
}

export default Map;
