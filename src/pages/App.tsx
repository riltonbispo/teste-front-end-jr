import "./app.scss";
import Banner from "../components/Banner/Banner";
import Header from "../partials/Header/Header";
import ProductType from "../components/ProductType/ProductType";

function App() {
  return (
    <div className="home">
      <Header></Header>
      <Banner></Banner>
      <ProductType />
    </div>
  );
}

export default App;
