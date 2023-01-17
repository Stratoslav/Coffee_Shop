import React from "react";
import "../Header/header.scss";
const HeaderComponent = () => {
  return (
    <header className="header">
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
            <a href="#" className="menu__list-link">
              <img
                className="menu__list-logo logo"
                src="https://cdn.worldvectorlogo.com/logos/devil68-svg.svg"
                alt="logo"
              />
            </a>
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
        <h1 className="main__title">Start Your Meal With Our Exclusive Menu</h1>
        <p className="main__text">
          <a href="#" className="main__text-link">
            LEARN MORE...
          </a>
        </p>
        <div>
          <img
            className="main__logo logo"
            src="https://cdn.worldvectorlogo.com/logos/devil68-svg.svg"
            alt="main__logo  logo"
          />
        </div>
        <h2 className="main__title-sell">
          book your table <span className="main__title-pay">NOW</span>
        </h2>
      </main>
    </header>
  );
};

export default HeaderComponent;
