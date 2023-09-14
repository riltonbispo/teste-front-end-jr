import "./app.scss";
import Banner from "../components/Banner/Banner";
import Header from "../partials/Header/Header";
import ProductType from "../components/ProductType/ProductType";
import Products from "../components/Products/Products";

function App() {
  return (
    <div className="home">
      <Header></Header>
      <Banner></Banner>
      <ProductType />
      <Products />
    </div>
  );
}

export default App;
