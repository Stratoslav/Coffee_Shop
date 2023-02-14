import React, {  useState } from "react";

import "./menu.scss";
import { MenuComponent } from "./MenuComponent";

const Menu = () => {
  let [isHotCoffee, setIsHotCoffee] = useState<string>("Hot");

  const changeTypeOfCoffee = () => {
    isHotCoffee === "Hot" ? setIsHotCoffee("Iced") : setIsHotCoffee("Hot");
  };

  return (
    <>
      <MenuComponent
        changeTypeOfCoffee={changeTypeOfCoffee}
        isHotCoffee={isHotCoffee}
      />
    </>
  );
};

export default Menu;
