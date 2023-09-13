import "./style.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Venha conhecer nossas promoções</h1>
        <span className="banner__subtitle">50% Off nos produtos </span>
        <button className="banner__button">Ver produto</button>
      </div>
    </div>
  );
};

export default Banner;
