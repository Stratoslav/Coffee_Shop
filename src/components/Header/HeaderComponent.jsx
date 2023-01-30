import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Header/header.scss";
import "../Main/main.scss";
import { PopUpCity, PopUpRestaurant } from "./PopUp/PopUp";
import { Link, NavLink } from "react-router-dom";
import { popUpAction } from "../../redux/slice/slicePopUp";
import { navigationAction } from "../../redux/slice/sliceNavigation";
import { PopUpContacts } from "../Contacts/PoPuContacts";
import { contactActions } from "../../redux/slice/sliceContacts";

const HeaderComponent = () => {
  const cart = useSelector((state) => state.cardShopReducer.card);
  const { modalCity, modalRestaurant } = useSelector(
    (state) => state.popUpReducer
  );
  const { contactPopUp } = useSelector((s) => s.contactReducer);
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <div className="header__inner-left">
          <span className="city">
            <a
              onClick={() => dispatch(popUpAction.openToogleModal())}
              className="city__link city__js"
              href="#f"
              data-action="open-modal"
            >
              Kyiv
            </a>
          </span>
          {modalCity && <PopUpCity />}

          <span className="restaurant">
            <a
              className="restaurant__link restaurant__js"
              onClick={() => dispatch(popUpAction.popUpRestaurant())}
              href="#rs"
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
                onClick={() =>
                  dispatch(navigationAction.handleShowComponent(true))
                }
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
            <li className="menu__list-item ">
              <a
                onClick={() => dispatch(contactActions.openOrCloseModal())}
                href="#"
                className="menu__list-link"
              >
                contact
              </a>
              {contactPopUp && <PopUpContacts />}
            </li>
            <li className="menu__list-item">
              <NavLink to="/blog" className="menu__list-link">
                blog
              </NavLink>
            </li>
          </ul>
        </menu>
        <nav className={cart.length === 0 ? "disabled" : "header__inner-right"}>
          <div
            className="nav_box"
            onClick={() =>
              dispatch(navigationAction.handleShowComponent(false))
            }
          >
            <NavLink to="/menu">
              <div className="card">
                <span></span>

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
