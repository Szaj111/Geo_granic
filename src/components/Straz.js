import React from "react";
import "./Straz.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

function Straz() {
  const [posterunkiData, setPosterunkiData] = React.useState(null);
  const [przejsciaData, setPrzejsciaData] = React.useState(null);

  const [showPosterunki, setShowPosterunki] = React.useState(true);
  const [showPrzejscia, setShowPrzejscia] = React.useState(true);

  // Pobieranie danych GeoJSON dla Posterunków
  React.useEffect(() => {
    fetch(
      "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aposterunki2&maxFeatures=50&outputFormat=application%2Fjson"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Posterunki Data:", data);
        setPosterunkiData(data);
      });
  }, []);

  // Pobieranie danych GeoJSON dla Przejść Granicznych
  React.useEffect(() => {
    fetch(
      "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aprzejscia_graniczne&maxFeatures=50&outputFormat=application%2Fjson"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Przejścia Data:", data);
        setPrzejsciaData(data);
      });
  }, []);

  // Funkcja do stylizacji punktów
  const pointToLayer = (feature, latlng) => {
    console.log("Feature Properties:", feature.properties); // Debugowanie właściwości
    let color = "black"; // Domyślny kolor

    // Sprawdzenie wartości w feature.properties
    if (feature.id && feature.id.startsWith("posterunki")) {
      color = "blue"; // Kolor dla posterunków
    } else if (feature.id && feature.id.startsWith("przejscia")) {
      color = "red"; // Kolor dla przejść granicznych
    }

    return L.circleMarker(latlng, {
      radius: 8,
      fillColor: color,
      color: color,
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    }).bindPopup(
      `<b>Posterunek</b><br>X: ${feature.properties.x_d || "Brak"}<br>Y: ${
        feature.properties.y_d || "Brak"
      }`
    );
  };

  return (
    <div className="map-container">
      <h1 className="map-title">Mapa Geoportalu</h1>

      {/* Checkboxy do wyboru warstw */}
      <div className="layer-controls">
        <label>
          <input
            type="checkbox"
            checked={showPosterunki}
            onChange={() => setShowPosterunki(!showPosterunki)}
          />
          Posterunki Straży Granicznej
        </label>
        <label>
          <input
            type="checkbox"
            checked={showPrzejscia}
            onChange={() => setShowPrzejscia(!showPrzejscia)}
          />
          Przejścia Graniczne
        </label>
      </div>

      <MapContainer
        center={[52.237049, 21.017532]}
        zoom={7}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {/* Wyświetlanie warstwy Posterunków */}
        {showPosterunki && posterunkiData && (
          <GeoJSON
            data={posterunkiData}
            pointToLayer={pointToLayer} // Stylizacja punktów
          />
        )}
        {/* Wyświetlanie warstwy Przejść Granicznych */}
        {showPrzejscia && przejsciaData && (
          <GeoJSON
            data={przejsciaData}
            pointToLayer={pointToLayer} // Stylizacja punktów
          />
        )}
      </MapContainer>

      <Link to="/">
        <button className="button">Powrót</button>
      </Link>
      <p className="map-description">
        Mapa przedstawiająca rozmieszczenie Posterunków Straży Granicznej oraz
        przejść granicznych.
      </p>
    </div>
  );
}

export default Straz;
