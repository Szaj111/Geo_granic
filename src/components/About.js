import React from "react";
import "./About.css";
import Tlo from "./obrazy/tlo2.jpg";

function About() {
  return (
    <div className="container">
      <div className="overlay">
        <div className="tytul">Opis Geoportalu</div>
        <div className="opis">
          Praca ma na celu identyfikację potencjalnych miejsc, w których
          nielegalni imigranci mogą przekraczać granicę polsko-białoruską.
          Analiza ma pomóc w wskazaniu obszarów wymagających wzmożonej ochrony
          oraz wspomóc działania związane z zabezpieczeniem granicy.
        </div>
      </div>
    </div>
  );
}

export default About;
