import React from "react";
import Logo from "../imgs/logo.png";
import Whats from "../imgs/whatsapp.png";
import Insta from "../imgs/instagram.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import Footer from "./Footer";

export default function Contato() {
  function enviarUrl(valor) {
    if (valor == 1) {
      window.open(
        "https://api.whatsapp.com/send/?phone=%2B5547997644083&text&type=phone_number&app_absent=0",
        "_blank"
      );
    } else {
      window.open("https://www.instagram.com/", "_blank");
    }
  }
  return (
    <div className="inicio">
      <h2 id="contato">Contato</h2>

      <div className="contato">
        <img src={Logo} alt="Logo" />
        <p>
          Telefone: 3025-0000 &nbsp;&nbsp; <CallIcon />
          <br />
          Whatsapp: 99764-4082
          <span>
            <WhatsAppIcon onClick={() => enviarUrl(1)} />
          </span>
          <br />
          Instagram: @AjEspaco
          <span>
            <InstagramIcon onClick={() => enviarUrl(2)} />{" "}
          </span>
        </p>

        <div className="localizacao">
          <h4>Localização</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.1015325195976!2d-48.81213818504266!3d-26.323211583385067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb16898ddc403%3A0x788895413d9e1f4!2sR.%20Vasco%20da%20Gama%2C%20338%20-%20F%C3%A1tima%2C%20Joinville%20-%20SC%2C%2089229-125!5e0!3m2!1spt-BR!2sbr!4v1680307191506!5m2!1spt-BR!2sbr"></iframe>
        </div>

        <a className="voltarHome" href="#home">
          <MenuOpenIcon />
        </a>
      </div>
      <Footer />
    </div>
  );
}
