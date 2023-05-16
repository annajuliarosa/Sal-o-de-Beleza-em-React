import React from "react";
import Depoimento1 from "../imgs/depoimento.png";
import Depoimento2 from "../imgs/depoimento2.png";
import Marcas from "./Marcas";
import { motion } from "framer-motion";
export default function Depoimentos() {
  return (
    <>
      <div className="inicio">
        <h2>Depoimentos de nossas Clientes</h2>

        <div className="bolasComando">
          <div className="bolasDepoimento">
            <img id="img1" src={Depoimento1} alt="Foto da Camila" />
            <h4>Camila</h4>
            <p>
              Melhor salão de Joinville, ótimo atendimento e serviço muito
              profissional
            </p>
          </div>

          <div className="bolasDepoimento">
            <img src={Depoimento2} alt="Foto da Julia" />
            <h4>Julia</h4>
            <p>
              Estou me sentindo maravilhosa depois de ter feito o cabelo com a
              Ana, atendimento de qualidade
            </p>
          </div>
        </div>
      </div>

      <Marcas />
    </>
  );
}
