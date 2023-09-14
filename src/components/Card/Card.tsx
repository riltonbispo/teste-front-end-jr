import "./style.scss";

type Props = {
  photo: string;
  price: number;
};

const Card = ({ ...props }: Props) => {
  return (
    <div className="card__container">
      <div className="card__content">
        <img src={props.photo} alt="" className="card__photo" />
        <div className="card__info">
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <span className="card__oldPrice">R$ 30,90</span>
          <span className="card__price">R$ {props.price}</span>
          <p className="card__details">ou 2x de R$ 49,95 sem juros</p>
          <span className="card__frete">Frete grátis</span>
          <button className="card__button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
