import "./style.scss";

import Button from "../Button/Button";

const Partners = () => {
  return (
    <section className="partners__container">
      <div className="partners__content">
        <div className="partners__item">
          <h4 className="partner__title">Parceiros</h4>
          <p className="partner__description">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <Button label="Confira" bold type="medium"></Button>
        </div>
        <div className="partners__item">
          <h4 className="partner__title">Parceiros</h4>
          <p className="partner__description">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <Button label="Confira" bold type="medium"></Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
