import { useState } from "react";
import { getPizza } from "../../api/PizzaApi";
import "../Header/header.scss";
import "../Main/main.scss";
import { PopUpCity, PopUpRestaurant } from "./PopUp/PopUp";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { CardShop } from "../Card/CardShop";

const HeaderComponent = ({
  cart,
  openToogleModal,
  modalCity,
  popUpRestaurant,
  modalRestaurant,
  setShow,
}) => {
  return (
    <>
      <header className="header">
        <div className="header__inner-left">
          <span className="city">
            <a
              onClick={openToogleModal}
              className="city__link city__js"
              href="#f"
              // class="city__js"
              data-action="open-modal"
            >
              Kyiv
            </a>
          </span>
          {modalCity && <PopUpCity />}

          <span className="restaurant">
            <a
              className="restaurant__link restaurant__js"
              onClick={popUpRestaurant}
              href="#rs"
              //  class="restaurant__js"
              data-action="open-modal"
            >
              restaurant
            </a>
          </span>
          {modalRestaurant && <PopUpRestaurant />}
        </div>
        <menu className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink to="/" className="menu__list-link">
                About us
              </NavLink>
            </li>
            <li className="menu__list-item">
              <Link
                onClick={() => setShow(true)}
                to="/menu"
                className="menu__list-link"
              >
                menu
              </Link>
            </li>
            <li className="menu__list-item">
              <NavLink to="/" className="menu__list-link">
                Gallery
              </NavLink>
            </li>
            <li className="menu__list-item">
              <span className="menu__logo logo"></span>
            </li>

            <li className="menu__list-item">
              <NavLink to="/" className="menu__list-link">
                Booking
              </NavLink>
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
        <nav className={cart.length === 0 ? "disabled" : "header__inner-right"}>
          <div className="nav_box" onClick={() => setShow(false)}>
            <NavLink to="/menu">
              <div className="card">
                <span></span>
                {/* <img
                    width={30}
                    ="../../img/header/shopping-basket.png"
                    alt=""
                  /> */}

                <span>{cart.length}</span>
              </div>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
