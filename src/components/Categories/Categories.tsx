import "./style.scss";
import { PiCrownSimple } from "react-icons/pi";
import { useState } from "react";

const Categories = () => {
  const [activeItem, setActiveItem] = useState<number>(5);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <nav className="categories">
      <ul className="categories__list">
        <li
          className={`categories__item ${activeItem === 0 && "active"}`}
          onClick={() => handleItemClick(0)}
        >
          Todas Categorias
        </li>
        <li
          className={`categories__item ${activeItem === 1 && "active"}`}
          onClick={() => handleItemClick(1)}
        >
          Supermercado
        </li>
        <li
          className={`categories__item ${activeItem === 2 && "active"}`}
          onClick={() => handleItemClick(2)}
        >
          Livros
        </li>
        <li
          className={`categories__item ${activeItem === 3 && "active"}`}
          onClick={() => handleItemClick(3)}
        >
          Moda
        </li>
        <li
          className={`categories__item ${activeItem === 4 && "active"}`}
          onClick={() => handleItemClick(4)}
        >
          Lançamentos
        </li>
        <li
          className={`categories__item ${activeItem === 5 && "active"}`}
          onClick={() => handleItemClick(5)}
        >
          Ofertas do dia
        </li>
        <li
          className={`categories__item ${activeItem === 6 && "active"}`}
          onClick={() => handleItemClick(6)}
        >
          <i>
            <PiCrownSimple />
          </i>
          Assinatura
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
