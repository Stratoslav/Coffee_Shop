import React, { useEffect, useState } from "react";

import HeaderComponent from "./HeaderComponent";

export const Header = ({ setShow }) => {
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
      <HeaderComponent setShow={setShow} />
    </>
  );
};
