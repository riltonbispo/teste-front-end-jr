import vtexLogo from "../../assets/logos/vtex.svg";
import "./style.scss";
import Categories from "../../components/Categories/Categories";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
  PiShieldCheck,
  PiTruck,
  PiCreditCard,
  PiHeart,
  PiUserCircle,
  PiShoppingCart,
  PiArchiveBox,
} from "react-icons/pi";

const Header = () => {
  return (
    <header className="home__header">
      <div className="info">
        <div className="info__item">
          <i className="info__icon">
            <PiShieldCheck />
          </i>
          <p className="info__text">
            Compra <span>100% segura</span>
          </p>
        </div>

        <div className="info__item">
          <i className="info__icon">
            <PiTruck />
          </i>
          <p className="info__text">
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>

        <div className="info__item">
          <i className="info__icon">
            <PiCreditCard />
          </i>
          <p className="info__text">
            <span>Parcele</span> suas compras
          </p>
        </div>
      </div>

      <div className="search">
        <img src={vtexLogo} alt="" className="search__logo" />
        <div className="search__input">
          <SearchInput />
        </div>
        <div className="search__icons">
          <PiArchiveBox />
          <PiHeart />
          <PiUserCircle />
          <PiShoppingCart />
        </div>
      </div>

      <Categories />
    </header>
  );
};

export default Header;
