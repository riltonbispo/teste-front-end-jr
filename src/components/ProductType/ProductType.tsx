import {
  PiDevices,
  PiStorefront,
  PiBeerStein,
  PiHammer,
  PiHandHeart,
  PiBarbell,
  PiHighHeel,
} from "react-icons/pi";
import { useState } from "react";

import "./style.scss";

const ProductType = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };
  return (
    <div className="type__container">
      <ul className="type__list">
        <li
          className={`type__item ${activeItem === 0 && "active"}`}
          onClick={() => handleItemClick(0)}
        >
          <i>
            <PiDevices />
          </i>
          <span>Tecnologia</span>
        </li>
        <li
          className={`type__item ${activeItem === 1 && "active"}`}
          onClick={() => handleItemClick(1)}
        >
          <i>
            <PiStorefront />
          </i>
          <span>Supermercado</span>
        </li>
        <li
          className={`type__item ${activeItem === 2 && "active"}`}
          onClick={() => handleItemClick(2)}
        >
          <i>
            <PiBeerStein />
          </i>
          <span>Bebidas</span>
        </li>
        <li
          className={`type__item ${activeItem === 3 && "active"}`}
          onClick={() => handleItemClick(3)}
        >
          <i>
            <PiHammer />
          </i>
          <span>Ferramentas</span>
        </li>
        <li
          className={`type__item ${activeItem === 4 && "active"}`}
          onClick={() => handleItemClick(4)}
        >
          <i>
            <PiHandHeart />
          </i>
          <span>Saúde</span>
        </li>
        <li
          className={`type__item ${activeItem === 5 && "active"}`}
          onClick={() => handleItemClick(5)}
        >
          <i>
            <PiBarbell />
          </i>
          <span>Esportes e Fitness</span>
        </li>
        <li
          className={`type__item ${activeItem === 6 && "active"}`}
          onClick={() => handleItemClick(6)}
        >
          <i>
            <PiHighHeel />
          </i>
          <span>Moda</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductType;
