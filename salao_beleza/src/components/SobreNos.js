import React from "react";
import Ana from "../imgs/profissional.jpg";
import Depoimentos from "./Depoimentos";

export default function SobreNos() {
  return (
    <>
      <div className="inicio">
        <h2>Sobre Nós</h2>

        <div className="ana">
          <img src={Ana} alt="Ana" />

          <p>
            <span id="cursiva"> Ana</span> <br />
            Especialista em mechas e apaixonada por cabelo, empreendedora desde
            os 20 anos. <br /> Certificada internacionalmente, com mais de 14
            cursos em seu diploma no segmento. Acreditamos que a maquiagem pode
            realçar a sua beleza natural e elevar a sua autoestima. É por isso
            que nos dedicamos a criar looks personalizados para cada cliente,
            levando em consideração as suas características únicas e o estilo
            desejado.
          </p>
        </div>
      </div>

      <Depoimentos />
    </>
  );
}
