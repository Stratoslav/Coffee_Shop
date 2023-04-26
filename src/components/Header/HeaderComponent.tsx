import React, { useEffect , useState} from "react";

import "../Header/header.scss";
import "../Main/main.scss";
import { PopUpCity, PopUpRestaurant } from "./PopUp/PopUp";
import { Link, NavLink } from "react-router-dom";
import { popUpAction } from "../../redux/slice/slicePopUp";
import { navigationAction } from "../../redux/slice/sliceNavigation";
import { PopUpContacts } from "../Contacts/PoPuContacts";
import { contactActions } from "../../redux/slice/sliceContacts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PopUpBooking } from "../Booking/PopUpBooking";

const HeaderComponent = () => {
  const cart = useAppSelector((state) => state.cardShopReducer.card);
  const { modalCity, modalRestaurant, currentCity } = useAppSelector(
    (state) => state.popUpReducer
  );
  const { contactPopUp } = useAppSelector((s) => s.contactReducer);
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
  const dispatch = useAppDispatch();
 const [ppUpBooking, setPopUpBooking] = useState(false)
  function ChangeCityPage() {
    dispatch(popUpAction.openToogleModal());
  }
  let [openNav, setOpen] = useState(false)
  const openNavigation = (e) => {
    setOpen(!openNav) 

    if (openNav === true) {
       hamburger.classList.add('active')
    navMenu.classList.add('active')
    } else {
       hamburger.classList.remove('active')
    navMenu.classList.remove('active')
    }
   
  }
  useEffect(() => {
    ChangeCityPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="header">
        <div className="header__inner-left">
          <span className="phone__logo">
                <NavLink to='/'>
                <img width={50} height={50} src="https://freesvg.org/img/johnny_automatic_cup_of_coffee.png" alt=""/>

                </NavLink>
          </span> 
          
          <div>
              <span className="city">
            <a
              onClick={ChangeCityPage}
              className="city__link city__js"
              href="#city"
              data-action="open-modal"
            >
              {currentCity}
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
              <span className="menu__logo logo">
                <NavLink to='/'>
                <img width={70} height={70} src="https://freesvg.org/img/johnny_automatic_cup_of_coffee.png" alt=""/>

                </NavLink>
              </span> 
            </li>

            <li className="menu__list-item">
              {cart.length !== 0 ? <NavLink to="/registration" className="menu__list-link">
                Booking
              </NavLink> : (cart.length < 1 ? <a href="#registration" className="menu__list-link" onClick={() => setPopUpBooking(!ppUpBooking)} >Booking</a> : 
              <a href="#registration" className="menu__list-link" onClick={() => setPopUpBooking(!ppUpBooking)} >Booking</a> && ppUpBooking === false)}
               {ppUpBooking && <PopUpBooking />}
            </li>
            <li className="menu__list-item ">
              <a
                onClick={() => dispatch(contactActions.openOrCloseModal())}
                href="#contacts"
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
        <nav className={"header__inner-right"}>
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
            <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                onClick={() =>
                  dispatch(navigationAction.handleShowComponent(true))
                }
                to="/menu"
                className="nav-link"
              >
                menu
              </Link>
            </li>
           
            <li className="nav-item">
              {cart.length !== 0 ? <NavLink to="/registration" className="nav-link">
                Booking
              </NavLink> : (cart.length < 1 ? <a href="#registration" className="nav-link" onClick={() => setPopUpBooking(!ppUpBooking)} >Booking</a> : 
              <a href="#registration" className="nav-link" onClick={() => setPopUpBooking(!ppUpBooking)} >Booking</a> && ppUpBooking === false)}
               {ppUpBooking && <PopUpBooking />}
            </li>
            <li className="nav-item">
              <a
                onClick={() => dispatch(contactActions.openOrCloseModal())}
                href="#contacts"
                className="nav-link"
              >
                contact
              </a>
              {contactPopUp && <PopUpContacts />}
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                blog
              </NavLink>
            </li>
          </ul>
          <div className="hamburger" onClick={openNavigation}>
            <span className="bar"></span>
                        <span className="bar"></span>

                        <span className="bar"></span>

          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
