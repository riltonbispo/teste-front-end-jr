import "./app.scss";
import Banner from "../components/Banner/Banner";
import Header from "../partials/Header/Header";
import ProductType from "../components/ProductType/ProductType";
import Products from "../components/Products/Products";
import Partners from "../components/Partners/Partners";
import Separator from "../components/Separator/Separator";

function App() {
  return (
    <div className="home">
      <Header></Header>
      <Banner></Banner>
      <ProductType />
      <Separator title="Produtos relacionados"></Separator>
      <Products />
      <Partners />
      <Separator title="Produtos relacionados" subtitle="Ver todos"></Separator>
    </div>
  );
}

export default App;
