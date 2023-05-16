import React from "react";
import Logo from "../imgs/logo.png";
import fotoHome from "../imgs/moreno.png";
import Serviços from "./Serviços";

export default function Home() {
  function enviarUrl() {
    window.open(
      "https://api.whatsapp.com/send/?phone=%2B5547997644083&text&type=phone_number&app_absent=0",
      "_blank"
    );
  }
  return (
    <>
      <header id="home">
        <div className="cabecalho">
          <img src={Logo} alt="Logo Marca" />
          <nav>
            <ul className="menu container">
              <li className="menu__item">
                <a href="#home" className="menu__link">
                  HOME
                </a>
              </li>

              <li className="menu__item">
                <a href="#servicos" className="menu__link">
                  SERVIÇOS
                </a>
              </li>

              <li className="menu__item">
                <a href="#produtos" className="menu__link">
                  PRODUTOS
                </a>
              </li>

              <li className="menu__item">
                <a href="#contato" className="menu__link">
                  CONTATO
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="mensagem">
        <p>
          VENHA CONHECER NOSSO ESPAÇO DE BELEZA <br />
          <span>SOMOS ESPECIALISTAS EM MECHAS E LOIRO </span>
          <br />
          HÁ 10 ANOS CUIDANDO DOS SEUS CABELOS <br /> COM PERFEIÇÃO E DELICADEZA
        </p>

        <button className="agendar" onClick={enviarUrl}>
          AGENDE SEU HORÁRIO
        </button>
        <img className="moreno" src={fotoHome} alt="Foto Moreno Iluminado" />
      </div>

      <Serviços />
    </>
  );
}
