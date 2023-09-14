import { getProducts } from "../../services/productsApi";
import { useEffect, useState } from "react";
import { ProductType } from "../../types/productType";
import Card from "../Card/Card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response.products);
      } catch (err) {
        console.log("ERRO!", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="products__container">
      <div className="products__content">
        <div className="products__swiper">
          <Swiper slidesPerView={4} navigation spaceBetween={30}>
            {products.map((product, index) => (
              <SwiperSlide key={index} className="products__slides">
                <Card photo={product.photo} price={product.price} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;
