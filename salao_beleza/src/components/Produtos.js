import React from "react";
import produto1 from "../imgs/kit-prod3.png";
import produto2 from "../imgs/produto2.png";
import produto3 from "../imgs/produto3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requer um carregador
import { Carousel } from "react-responsive-carousel";
import SobreNos from "./SobreNos";

export default function Produtos() {
  function enviarUrl() {
    window.open(
      "https://api.whatsapp.com/send/?phone=%2B5547997644083&text&type=phone_number&app_absent=0",
      "_blank"
    );
  }
  return (
    <>
      <div className="inicio">
        <h2 id="produtos">Conheça nossos Produtos</h2>

        <div className="carrosel">
          <Carousel>
            <div className="car">
              <img src={produto1} />
              <p className="leg">
                Kit de Tratamento Maciez e Brilho <br /> R$190.00
                <br />
                <button onClick={enviarUrl}>COMPRE AQUI</button>
              </p>
            </div>
            <div className="car">
              <img src={produto2} />
              <p className="leg">
                Kit Desmaia Cabelo <br /> R$169.90
                <br />
                <button onClick={enviarUrl}>COMPRE AQUI</button>
              </p>
            </div>
            <div className="car">
              <img src={produto3} />
              <p className="leg">
                {" "}
                Kit Nutrifier Glicerol e Coco
                <br /> R$239.90
                <br />
                <button onClick={enviarUrl}>COMPRE AQUI</button>
              </p>
            </div>
          </Carousel>
        </div>
      </div>

      <SobreNos />
    </>
  );
}
