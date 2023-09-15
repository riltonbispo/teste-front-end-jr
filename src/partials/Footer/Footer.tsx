import { PiInstagramLogo, PiFacebookLogo, PiYoutubeLogo } from "react-icons/pi";
import alelo from "../../assets/logos/alelo.svg";
import amex from "../../assets/logos/amex.svg";
import dinners from "../../assets/logos/dinners.svg";
import econverse from "../../assets/logos/econverse.svg";
import vtexwhite from "../../assets/logos/vtextwhite.svg";
import elo from "../../assets/logos/elo.svg";
import ifood from "../../assets/logos/ifood.svg";
import mastercard from "../../assets/logos/mastercard.svg";
import pix from "../../assets/logos/pix.svg";
import sodexo from "../../assets/logos/sodexo.svg";
import ticket from "../../assets/logos/ticket.svg";
import FooterCard from "../../components/FooterCard/FooterCard";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <div className="footer__section">
          <h5>Sobre nós</h5>
          <ul>
            <li>Conheça</li>
            <li>Como comprar</li>
            <li>Indicações e desconto</li>
          </ul>
          <div className="footer__icons">
            <i>
              <PiFacebookLogo />
            </i>
            <i>
              <PiInstagramLogo />
            </i>
            <i>
              <PiYoutubeLogo />
            </i>
          </div>
        </div>
        <div className="footer__section">
          <h5>informações úteis</h5>
          <ul>
            <li>fale conosco</li>
            <li>dúvidas</li>
            <li>prazos de entrega</li>
            <li>formas de pagamento</li>
            <li>política de privacidade</li>
            <li>trocas e devoluções</li>
          </ul>
        </div>
        <div className="footer__section">
          <h5>formas de pagamentos</h5>
          <div className="footer__logos">
            <img src={alelo} alt="" />
            <img src={amex} alt="" />
            <img src={dinners} alt="" />
            <img src={elo} alt="" />
            <img src={ifood} alt="" />
            <img src={mastercard} alt="" />
            <img src={pix} alt="" />
            <img src={sodexo} alt="" />
            <img src={ticket} alt="" />
          </div>
        </div>
        <FooterCard></FooterCard>
      </div>
      <div className="footer__copyright">
        <p className="footer__text">
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <div className="footer__partners">
          <img src={econverse} alt="" />
          <img src={vtexwhite} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
