import "./style.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { PiXBold, PiPlusBold, PiMinusBold } from "react-icons/pi";
import { useProduct } from "../../contexts/ProductContext";

type Props = {
  onClose: () => void;
};

const Modal = ({ onClose }: Props) => {
  const [inputValue, setInputValue] = useState(1);
  const pContext = useProduct();

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal__container">
      <div className="modal__content">
        <img src={pContext?.product.photo} alt="" className="modal__image" />
        <div className="modal__info">
          <p className="modal__title">{pContext?.product.productName}</p>
          <span className="modal__price">R$ {pContext?.product.price}</span>
          <p className="modal__description">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <span className="modal__link">Veja mais detalhes do produto</span>
          <div className="modal__input-box">
            <button
              onClick={() => {
                if (inputValue > 1) setInputValue(inputValue - 1);
              }}
              className="modal__button"
            >
              <PiMinusBold />
            </button>

            <input type="text" value={inputValue} className="modal__input" />
            <button
              onClick={() => setInputValue(inputValue + 1)}
              className="modal__button"
            >
              <PiPlusBold />
            </button>
          </div>
          <Button label="comprar" type="large"></Button>
          <button className="modal__close-button" onClick={handleClose}>
            <PiXBold />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
