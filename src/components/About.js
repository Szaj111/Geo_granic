import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="tytul">Opis Geoportalu</div>
      <div className="opis">
        Praca ma na celu identyfikację potencjalnych miejsc, w których
        nielegalni imigranci mogą przekraczać granicę polsko-białoruską. Analiza
        ma pomóc w wskazaniu obszarów wymagających wzmożonej ochrony oraz
        wspomóc działania związane z zabezpieczeniem granicy.
      </div>
    </div>
  );
}

export default About;
