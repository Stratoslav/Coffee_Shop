import React, { useEffect, useState } from "react";

import HeaderComponent from "./HeaderComponent";

export const Header = ({ setShow, show, cart }) => {
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

  return (
    <>
      <HeaderComponent
        show={show}
        cart={cart}
        openToogleModal={openToogleModal}
        popUpRestaurant={popUpRestaurant}
        modalCity={modalCity}
        modalRestaurant={modalRestaurant}
        setShow={setShow}
      />
    </>
  );
};
