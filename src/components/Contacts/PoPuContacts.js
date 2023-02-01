import React from "react";
import "../Header/PopUp/popup.scss";

export const PopUpContacts = () => {
  return (
    <div className="modal modal__city contacts__item">
      <ul className="modal__list">
        <li className="modal__list-item phone__item">
          <a className="modal__list-link" href="tel:097 881 19 70">
            097 881 19 70
          </a>
        </li>
        <li className="modal__list-item viber__item">
          <a className="modal__list-link" href="https://www.viber.com/ua/">
            097 881 19 70
          </a>
        </li>
        <li className="modal__list-item telegam__item">
          <a className="modal__list-link" href="https://t.me/stratoslavv">
            097 881 19 70
          </a>
        </li>
      </ul>
    </div>
  );
};
