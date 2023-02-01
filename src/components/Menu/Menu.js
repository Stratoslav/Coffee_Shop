import React, { useEffect, useState } from "react";
import axios from "axios";
import "./menu.scss";
import { MenuComponent } from "./MenuComponent";

const Menu = ({ handleClick }) => {
  let [isHotCoffee, setIsHotCoffee] = useState("Hot");

  const changeTypeOfCoffee = () => {
    isHotCoffee === "Hot" ? setIsHotCoffee("Iced") : setIsHotCoffee("Hot");
  };

  return (
    <>
      <MenuComponent
        changeTypeOfCoffee={changeTypeOfCoffee}
        isHotCoffee={isHotCoffee}
        handleClick={handleClick}
      />
    </>
  );
};

export default Menu;
