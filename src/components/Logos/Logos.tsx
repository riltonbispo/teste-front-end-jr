import { Swiper, SwiperSlide } from "swiper/react";
import vtexLogo from "../../assets/logos/vtex.svg";

import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";

const Logos = () => {
  return (
    <div className="logos__container">
      <div className="logos__content">
        <Swiper
          slidesPerView={6}
          navigation
          spaceBetween={40}
          className="logos__swiper"
        >
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logo__item">
              <img src={vtexLogo} alt="" className="logo__image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Logos;
