import React from "react";
import "../About/about.scss";
import { NavLink } from "react-router-dom";

export const AboutComponent = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div>
          <div className="about__title-descr">
 <h2 className="about__title">ABOUT</h2>
           <img
          width={100}
          height={100}
          src="https://freesvg.org/img/johnny_automatic_cup_of_coffee.png"
          alt=""
        />
          </div>
         
          <p className="about__text">
           The coffee-selling website offers a wide range of premium-quality coffee blends from all around the world. With a user-friendly interface, customers can easily navigate through the website and select their desired coffee type, roast level, and flavor profile. The website also provides detailed information about each coffee blend, including its origin, processing method, and tasting notes. Customers can choose between whole bean or ground coffee, and the website also offers a convenient subscription service for regular coffee deliveries. With fast shipping and excellent customer service, the website is the perfect destination for coffee lovers looking for high-quality coffee at affordable prices.
          </p>
          
          <div className="about__offer">
            Visit OR Book, <NavLink to='/registration'>
              <strong>NOW</strong>
            </NavLink> 
          </div>
        </div>
      </div>
    </section>
  );
};
