import React from "react";
import Salonline from "../imgs/salonline-marca.png";
import Kerasteze from "../imgs/Kerastase-Logo.png";
import Loreal from "../imgs/LOREAL.png";
import Contato from "./Contato";
export default function Marcas() {
  return (
    <>
      <div className="inicio">
        <h2>Marcas Parceiras</h2>

        <div className="marcas">
          <img id="salon" src={Salonline} alt="Salonline Marca" />
          <img id="salon" src={Kerasteze} alt="Kerastese Marca" />
          <img id="loreal" src={Loreal} alt="Loreal Marca" />
        </div>
      </div>
      <Contato />
    </>
  );
}
