import React from "react";
import morenoIluminado from "../imgs/morenoIluminado.jpg";
import loiroDourado from "../imgs/loiro-dourado.jpg";
import loiro from "../imgs/loiro.jpg";
import micro1 from "../imgs/micro-a.jpg";
import micro2 from "../imgs/micro2.jpg";
import micro3 from "../imgs/micro3.png";
import maq1 from "../imgs/maq.jpg";
import maq2 from "../imgs/maq2.jpg";
import maq3 from "../imgs/maq3.jpg";
import Produtos from "./Produtos";

export default function Serviços() {
  return (
    <>
      <div className="inicio">
        <h2 id="servicos">Conheça nossos Serviços</h2>
        <div className="bolas">
          <p>Mechas e Loiros</p>
          <p>Sobrancelhas e Micropigmentação</p>
          <p>Maquiagem</p>
        </div>
        <div className="fotosServicos">
          <img src={morenoIluminado} alt="Foto Moreno Iluminado" />
          <img src={loiroDourado} alt="Foto Moreno Iluminado" />
          <img src={loiro} alt="Foto Moreno Iluminado" />
        </div>
        <div className="fotosServicos">
          <img src={micro1} alt="Foto Micropgimentacao modelo 1" />
          <img src={micro2} alt="Foto Micropgimentacao modelo 2" />
          <img src={micro3} alt="Foto Micropgimentacao modelo 3" />
        </div>
        <div className="fotosServicos">
          <img src={maq1} alt="Foto Maquiagem modelo 1" />
          <img src={maq2} alt="Foto Maquiagem modelo 2" />
          <img src={maq3} alt="Foto Maquiagem modelo 3" />
        </div>{" "}
      </div>

      <Produtos />
    </>
  );
}
