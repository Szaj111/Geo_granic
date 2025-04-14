import React from "react";
import "./Data.css";

const Data = () => {
  const surfaceObjects = [
    { code: "PTWP", name: "Wody powierzchniowe" },
    { code: "PTUT", name: "Uprawa trwała" },
    { code: "PTRK", name: "Roślinność krzewiasta" },
    { code: "PTLZ", name: "Teren roślinny/zadrzewiony" },
    { code: "PTGN", name: "Nieużytki" },
    { code: "OIMK", name: "Mokradło" },
    { code: "PTZB", name: "Zabudowa" },
    { code: "PTTR", name: "Roślinność trawiasta i uprawa rolna" },
  ];

  const linearObjects = [
    { code: "SKJZ", name: "Jezdnia" },
    { code: "SKRP", name: "Ciąg ruchu pieszego i rowerowego" },
    { code: "SWRS", name: "Rzeka, strumień" },
    { code: "SKTR", name: "Zespół torów" },
  ];

  const pointObjects = [{ code: "BUIN", name: "Budowla inżynieryjna" }];

  return (
    <div className="data-container">
      <h1 className="main-header">BDOT10k</h1>
      <section>
        <h2>Obiekty powierzchniowe</h2>
        <ul>
          {surfaceObjects.map((obj) => (
            <li key={obj.code}>
              <strong>{obj.code}</strong>: {obj.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Obiekty liniowe</h2>
        <ul>
          {linearObjects.map((obj) => (
            <li key={obj.code}>
              <strong>{obj.code}</strong>: {obj.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Obiekty punktowe</h2>
        <ul>
          {pointObjects.map((obj) => (
            <li key={obj.code}>
              <strong>{obj.code}</strong>: {obj.name}
            </li>
          ))}
        </ul>
      </section>
      <section></section>
      <footer className="footer-link">
        <p>
          Informacje o posterunkach i oddziałach Straży Granicznej pochodzą ze
          strony{" "}
          <a
            href="https://www.strazgraniczna.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.strazgraniczna.pl
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Data;
