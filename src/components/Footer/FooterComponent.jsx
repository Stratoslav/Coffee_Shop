import React from "react";
import "../Footer/footer.scss";
import shortid from "shortid";
import socialIcon from "./Social.json";
import { NavLink } from "react-router-dom";
export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__logo logo">
        <img
          width={100}
          height={100}
          src="https://freesvg.org/img/johnny_automatic_cup_of_coffee.png"
          alt=""
        />
      </div>
      <ul className="footer__list">
        <li className="footer__list-item">
          <NavLink to="/menu" className="footer__list-link">
            MENU
          </NavLink>
        </li>
        <li className="footer__list-item">
          <a href="#booking" className="footer__list-link">
            BOOKINGS
          </a>
        </li>
        <li className="footer__list-item">
          <NavLink to="/gallery" className="footer__list-link">
            GALLERY
          </NavLink>
        </li>
        <li className="footer__list-item">
          <NavLink to="/blog" className="footer__list-link">
            BLOG
          </NavLink>
        </li>
      </ul>
      <ul className="footer__list icon">
        {socialIcon.map((icon) => {
          return (
            <li key={shortid.generate()} className="footer__list-icon">
              <a href={icon.src} target="_blank" rel="noreferrer">
                <img
                  className="footer__list-img"
                  src={icon.icon}
                  alt=""
                  width={45}
                  height={45}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
