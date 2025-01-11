import React from "react";
import "./Straz.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

function Straz() {
  const [geoData, setGeoData] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aposterunki&maxFeatures=50&outputFormat=application%2Fjson"
    )
      .then((response) => response.json())
      .then((data) => setGeoData(data));
  }, []);
  React.useEffect(() => {
    fetch(
      "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aprzejscia_graniczne&maxFeatures=50&outputFormat=application%2Fjson"
    )
      .then((response) => response.json())
      .then((data) => setGeoData(data));
  }, []);

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
        {/* Warstwa GeoJSON */}
        {geoData && <GeoJSON data={geoData} />}
      </MapContainer>
      <Link to="/">
        <button className="button">Powrót </button>
      </Link>
      <p className="map-description">
        Mapa przedstawiająca rozmieszczenie Posterunków Straży Granicznej oraz
        przejść granicznych.
      </p>
    </div>
  );
}

export default Straz;
