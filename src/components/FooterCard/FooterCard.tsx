import React from "react";
import "./style.scss";

const FooterCard = () => {
  return (
    <div className="footercard__container">
      <div className="footercard__content">
        <p className="footercard__title">
          Cadastre-se e Receba nossas <span>novidades e promoções</span>
        </p>
        <p className="footercard__description">
          Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
          lorem ipsum
        </p>
        <form action="">
          <input
            type="email"
            placeholder="SEU E-MAIL"
            className="footercard__input"
          />
          <button className="footercard__button">ok</button>
        </form>
      </div>
    </div>
  );
};

export default FooterCard;
