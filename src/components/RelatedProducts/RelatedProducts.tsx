import { useState } from "react";
import "./style.scss";

const RelatedProducts = () => {
  const [activeItem, setActiveItem] = useState<number>(5);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className="related-products__container">
      <div className="related-products__content">
        <ul className="related-products__list">
          <li
            className={`related-products__item ${activeItem === 0 && "active"}`}
            onClick={() => handleItemClick(0)}
          >
            celular
          </li>
          <li
            className={`related-products__item ${activeItem === 1 && "active"}`}
            onClick={() => handleItemClick(1)}
          >
            acessórios
          </li>
          <li
            className={`related-products__item ${activeItem === 2 && "active"}`}
            onClick={() => handleItemClick(2)}
          >
            tablets
          </li>
          <li
            className={`related-products__item ${activeItem === 3 && "active"}`}
            onClick={() => handleItemClick(3)}
          >
            notebooks
          </li>
          <li
            className={`related-products__item ${activeItem === 4 && "active"}`}
            onClick={() => handleItemClick(4)}
          >
            tevs
          </li>
          <li
            className={`related-products__item ${activeItem === 5 && "active"}`}
            onClick={() => handleItemClick(5)}
          >
            ver todos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RelatedProducts;
