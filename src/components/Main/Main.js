import React from "react";
import "../Header/header.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { About } from "../About/About";
import { Action } from "../Action/Action";
import { GalleryComponent } from "../Gallery/GalleryComponent";
import { Booking } from "../Booking/Booking";
import { Contacts } from "../Contacts/Contacts";
const MainComponent = () => {
  return (
    <>
      <section className="main__container">
        <div className="main__wrap">
          <Carousel className="carousel__img">
            <div>
              <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
              <p className="legend">Vines</p>
            </div>
            <div>
              <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/iceland_waterfall.jpg?crop=0%2C263%2C1600%2C880&wid=4000&hei=2200&scl=0.4" />
              <p className="legend">Milk</p>
            </div>
            <div>
              <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/iceland_waterfall.jpg?crop=0%2C263%2C1600%2C880&wid=4000&hei=2200&scl=0.4" />
              <p className="legend">Coffe</p>
            </div>
          </Carousel>
        </div>
        <main className="main">
          <h1 className="main__title">
            Start Your Meal With Our Exclusive Menu
          </h1>
          <p className="main__text">
            <a href="#" className="main__text-link">
              LEARN MORE...
            </a>
          </p>
          <div className="main__logo logo"></div>
          <h2 className="main__title-sell">
            book your table <span className="main__title-pay">NOW</span>
          </h2>
        </main>
      </section>
      <About />
      <Action />
      <GalleryComponent />
      <Booking />
      <Contacts />
    </>
  );
};

export default MainComponent;
