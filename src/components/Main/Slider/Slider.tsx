import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/scss/effect-fade";
import "./slider.scss";

import "swiper/css/pagination";
import "../../Header/header.scss";
import { NavLink } from "react-router-dom";
import { useGetHotCoffQuery } from "../../../api/coffeeApi";
// interface Coffee {
//   coffee_name: string;
//   description: string;
//   ingredients?: string[];
//   image: string;
//   id: number;
// }
export const Slider = () => {
    let { data } = useGetHotCoffQuery();

  // let [hotCoffee, setHotCoffee] = useState<Coffee[]>([]);
  // const getIcedCoffee = async () => {
  //   const response = await axios
  //     .get(`http://localhost:5000/coffee`)
  //     .then((res) => {
  //       return res.data;
  //     });
  //   setHotCoffee(response);
  // };
  // let hotCoffees = hotCoffee.map(h => h.id)

  // useEffect(() => {
  //   if (isLoading) {
  //       setHotCoffee(data)
  //   }
  
    // getIcedCoffee();
   
  // }, [data, isLoading]);

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
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
      >
        <div>
          { (data?.length > 0&&  data.map(({ coffee_name, image, description, id , price}) => (
           <>
            
              
               <SwiperSlide key={id}>
              <div className="slider">
                  <img
                    className="slider__img"
                    width={300}
                    height={270}
                    src={`http://localhost:5000/${image}`}
                  alt={coffee_name}
                />
                <div className="details">
                  <h3 className="coffee__list-title">{coffee_name}</h3>
                  <p className="slider__text">{description.slice(0, 100) + "..."}</p>
                    <p className="slider__price">Price: { price} UAN</p>
                  <NavLink to="/menu" className="slider__link">
                    LEARN MORE...
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
            
           </>
          ))) }
        </div>
      </Swiper>
    </>
  );
};
<NavLink to="/menu" className="main__text-link">
  LEARN MORE...
</NavLink>;


