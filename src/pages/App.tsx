import "./app.scss";
import Banner from "../components/Banner/Banner";
import Header from "../partials/Header/Header";
import ProductType from "../components/ProductType/ProductType";
import Products from "../components/Products/Products";
import Partners from "../components/Partners/Partners";
import Separator from "../components/Separator/Separator";
import Logos from "../components/Logos/Logos";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import Footer from "../partials/Footer/Footer";

function App() {
  return (
    <div className="home">
      <Header></Header>
      <Banner></Banner>
      <ProductType />
      <Separator title="Produtos relacionados"></Separator>
      <RelatedProducts></RelatedProducts>
      <Products />
      <Partners />
      <Separator title="Produtos relacionados" subtitle="Ver todos"></Separator>
      <Partners />
      <Separator title="Navegue por marcas"></Separator>
      <Logos></Logos>
      <Footer></Footer>
    </div>
  );
}

export default App;
