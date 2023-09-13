import "./style.scss";
import { PiMagnifyingGlass } from "react-icons/pi";

const SearchInput = () => {
  return (
    <div className="search__container">
      <input type="text" placeholder="O que você está buscando?" />
      <button>
        <i>
          <PiMagnifyingGlass />
        </i>
      </button>
    </div>
  );
};

export default SearchInput;
