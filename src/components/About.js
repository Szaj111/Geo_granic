import React from "react";
import "./About.css";
import Tlo from "./obrazy/tlo2.jpg";

function About() {
  return (
    <div className="container">
      <div className="overlay">
        <div className="tytul">Opis pracy</div>
        <div className="opis">
          Teza: Klasyfikacja terenu umożliwia wyznaczenie potencjalnych tras
          nielegalnego przekraczania granicy polsko-białoruskiej oraz
          identyfikację obszarów szczególnie podatnych na to zjawisko. Cel
          pracy: Celem pracy jest wyznaczenie potencjalnych dróg przemieszczania
          się imigrantów przy granicy, co umożliwia zidentyfikowanie obszarów
          wymagających wzmocnienia ochrony w celu skuteczniejszego
          przeciwdziałania nielegalnym przekroczeniom.
        </div>
      </div>
    </div>
  );
}

export default About;
