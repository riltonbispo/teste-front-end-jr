import "./style.scss";

import Button from "../Button/Button";
import { useProduct } from "../../contexts/ProductContext";

type Props = {
  photo: string;
  price: number;
  productName: string;
  description: string;
  onClick: () => void;
};

const Card = ({ ...props }: Props) => {
  const pContext = useProduct();
  const handleClick = () => {
    pContext?.dispatch({
      type: "add",
      payload: {
        productName: props.productName,
        descriptionShort: props.description,
        photo: props.photo,
        price: props.price,
      },
    });
    props.onClick();
  };

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
          <Button label="Comprar" type="large" onClick={handleClick}></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
 