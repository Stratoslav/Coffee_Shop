import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/scss/effect-fade";
import "./slider.scss";

import "swiper/css/pagination";
import "../../Header/header.scss";
import { NavLink } from "react-router-dom";

export const Slider = () => {
  const swiper = useSwiper();
  let [hotCoffee, setHotCoffee] = useState([]);
  const getIcedCoffee = async () => {
    const response = await axios
      .get(`https://api.sampleapis.com/coffee/hot`)
      .then((res) => {
        return res.data;
      });
    setHotCoffee(response);
  };
  useEffect(() => {
    getIcedCoffee();
  }, []);
  return (
    <>
      <Swiper
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        slidesPerView={1}
        navigation={true}
        effect={"flip"}
        speed={800}
        loop
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <div>
          {hotCoffee.map(({ title, image, description, id }) => (
            <SwiperSlide key={id}>
              <div className="slider">
                <img
                  className="slider__img"
                  width={300}
                  height={270}
                  src={image}
                  alt={title}
                />
                <div className="details">
                  <h3 className="coffee__list-title">{title}</h3>
                  <p className="slider__text">{description}</p>
                  <p>Price: 3$</p>
                  <NavLink to="/menu" className="slider__link">
                    LEARN MORE...
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
<NavLink to="/menu" className="main__text-link">
  LEARN MORE...
</NavLink>;
