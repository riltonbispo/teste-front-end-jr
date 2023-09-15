import "./style.scss";

import Button from "../Button/Button";

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
        <form action="" className="footercard__form">
          <input
            type="email"
            placeholder="SEU E-MAIL"
            className="footercard__input"
          />
          <Button label="ok" type="small"></Button>
        </form>
      </div>
    </div>
  );
};

export default FooterCard;
