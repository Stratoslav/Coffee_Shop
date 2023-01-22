import React from "react";
import "../PopUp/popup.scss";

export const PopUpCity = () => {
  return (
    <>
      <div className="modal modal__city">
        <ul className="modal__list">
          <li className="modal__list-item">
            <a className="modal__link" href="#">
              Mykolaiv
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              Harkiv
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              Summy
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              Lviv
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              Dnipro
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export const PopUpRestaurant = () => {
  return (
    <>
      <div className="modal modal__restaurant">
        <ul className="modal__list">
          <li className="modal__list-item">
            <a className="modal__link" href="#">
              вул. Оноре де Бальзака, 63
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              Hвул. Вадима Гетьмана, 6, ТРЦ "COSMO MULTIMALL"
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              вул. Маршала Тимошенка, 21, корпус 3
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              вул. Велика Васильківська, 76
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              пр. Перемоги, 136
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
