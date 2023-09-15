import { getProducts } from "../../services/productsApi";
import { useEffect, useState } from "react";
import { ProductType } from "../../types/productType";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="products__container">
      <div className="products__content">
        <div className="products__swiper">
          <Swiper slidesPerView={4} navigation spaceBetween={30}>
            {products.map((product, index) => (
              <SwiperSlide key={index} className="products__slides">
                <Card
                  photo={product.photo}
                  price={product.price}
                  productName={product.productName}
                  description={product.descriptionShort}
                  onClick={openModal}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {isModalOpen && <Modal onClose={closeModal}></Modal>}
      </div>
    </div>
  );
};

export default Products;
