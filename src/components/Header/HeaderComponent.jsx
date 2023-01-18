import React from "react";
import "../Header/header.scss";
const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__container">
        <menu className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">
                About us
              </a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">
                menu
              </a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">
                gallery
              </a>
            </li>
            <li className="menu__list-item">
              <span className="menu__logo logo"></span>
            </li>

            <li className="menu__list-item">
              <a href="#" className="menu__list-link">
                bookings
              </a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">
                contact
              </a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">
                blog
              </a>
            </li>
          </ul>
        </menu>
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
      </div>
    </header>
  );
};

export default HeaderComponent;
