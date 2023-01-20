import React from "react";
import "../Footer/footer.scss";
import shortid from "shortid";
const socialIcon = [
  "https://cdn-icons-png.flaticon.com/512/1384/1384005.png",
  "https://cdn-icons-png.flaticon.com/512/1384/1384017.png",
  "https://cdn-icons-png.flaticon.com/512/1384/1384015.png",
  "https://cdn-icons-png.flaticon.com/512/25/25698.png",
];
export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__logo logo"></div>
      <ul className="footer__list">
        <li className="footer__list-item">
          <a className="footer__list-link">About us</a>
        </li>
        <li className="footer__list-item">
          <a className="footer__list-link">MENU</a>
        </li>
        <li className="footer__list-item">
          <a className="footer__list-link">BOOKINGS</a>
        </li>
        <li className="footer__list-item">
          <a className="footer__list-link">GALLERY</a>
        </li>
        <li className="footer__list-item">
          <a className="footer__list-link">CONTACT</a>
        </li>
        <li className="footer__list-item">
          <a className="footer__list-link">BLOG</a>
        </li>
      </ul>
      <ul className="footer__list icon">
        {socialIcon.map((icon) => {
          return (
            <li key={shortid.generate()} className="footer__list-icon">
              <a href="google">
                <img
                  className="footer__list-img"
                  src={icon}
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
