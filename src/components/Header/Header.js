import React, { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
console.log(document.body.offsetWidth);
export const Header = () => {
  const [modalCity, setModalCity] = useState(false);
  const [modalRestaurant, setModalRestaurant] = useState(false);

  const openToogleModal = (e) => {
    setModalCity(!modalCity);
    setModalRestaurant(false);
  };
  const popUpRestaurant = (e) => {
    setModalRestaurant(!modalRestaurant);
    setModalCity(false);
  };
  // document.body.addEventListener("click", (e) => {
  //   if (
  //     e.srcElement.className !== "modal" &&
  //     e.srcElement.className !==
  //       ("city__js" ||
  //         "modal__list" ||
  //         "modal__list-item" ||
  //         "modal__list-link") &&
  //     e.srcElement.className !== "restaurant__js" &&
  //     e.srcElement.className !== "modal__list-link"
  //   ) {
  //     setModalCity(false);
  //     setModalRestaurant(false);
  //   }
  // });
  return (
    <>
      <HeaderComponent
        openToogleModal={openToogleModal}
        popUpRestaurant={popUpRestaurant}
        modalCity={modalCity}
        modalRestaurant={modalRestaurant}
      />
    </>
  );
};
