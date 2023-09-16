import {
  PiDevicesLight,
  PiStorefrontLight,
  PiBeerSteinLight,
  PiHammerLight,
  PiHandHeartLight,
  PiBarbellLight,
  PiHighHeelLight,
} from "react-icons/pi";
import { useState } from "react";

import "./style.scss";

const ProductType = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };
  return (
    <aside className="type__container">
      <ul className="type__list">
        <li
          className={`type__item ${activeItem === 0 && "active"}`}
          onClick={() => handleItemClick(0)}
        >
          <i>
            <PiDevicesLight />
          </i>
          <span>Tecnologia</span>
        </li>
        <li
          className={`type__item ${activeItem === 1 && "active"}`}
          onClick={() => handleItemClick(1)}
        >
          <i>
            <PiStorefrontLight />
          </i>
          <span>Supermercado</span>
        </li>
        <li
          className={`type__item ${activeItem === 2 && "active"}`}
          onClick={() => handleItemClick(2)}
        >
          <i>
            <PiBeerSteinLight />
          </i>
          <span>Bebidas</span>
        </li>
        <li
          className={`type__item ${activeItem === 3 && "active"}`}
          onClick={() => handleItemClick(3)}
        >
          <i>
            <PiHammerLight />
          </i>
          <span>Ferramentas</span>
        </li>
        <li
          className={`type__item ${activeItem === 4 && "active"}`}
          onClick={() => handleItemClick(4)}
        >
          <i>
            <PiHandHeartLight />
          </i>
          <span>Saúde</span>
        </li>
        <li
          className={`type__item ${activeItem === 5 && "active"}`}
          onClick={() => handleItemClick(5)}
        >
          <i>
            <PiBarbellLight />
          </i>
          <span>Esportes e Fitness</span>
        </li>
        <li
          className={`type__item ${activeItem === 6 && "active"}`}
          onClick={() => handleItemClick(6)}
        >
          <i>
            <PiHighHeelLight />
          </i>
          <span>Moda</span>
        </li>
      </ul>
    </aside>
  );
};

export default ProductType;
