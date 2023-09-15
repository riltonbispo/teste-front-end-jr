import "./style.scss";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Venha conhecer nossas promoções</h1>
        <span className="banner__subtitle">50% Off nos produtos </span>
        <Button label="Ver produto" type="extra-large"></Button>
      </div>
    </div>
  );
};

export default Banner;
