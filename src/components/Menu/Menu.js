import React, { useEffect, useState } from "react";
import axios from "axios";
import "./menu.scss";
import { MenuComponent } from "./MenuComponent";

const Menu = ({ handleClick }) => {
  let [hotCoffee, setHotCoffee] = useState([]);
  let [icedCoffee, setIcedCoffee] = useState([]);
  let [isHotCoffee, setIsHotCoffee] = useState("Hot");

  const getHotCoffee = async () => {
    const response = await axios
      .get(`https://api.sampleapis.com/coffee/hot`)
      .then((res) => {
        return res.data;
      });
    setHotCoffee(response);
  };

  const getIcedCoffee = async () => {
    const response = await axios
      .get(`https://api.sampleapis.com/coffee/iced`)
      .then((res) => {
        return res.data;
      });
    setIcedCoffee(response);
  };

  useEffect(() => {
    getHotCoffee();
    getIcedCoffee();
  }, []);

  const changeTypeOfCoffee = () => {
    isHotCoffee === "Hot" ? setIsHotCoffee("Iced") : setIsHotCoffee("Hot");
  };

  return (
    <>
      <MenuComponent
        changeTypeOfCoffee={changeTypeOfCoffee}
        isHotCoffee={isHotCoffee}
        hotCoffee={hotCoffee}
        icedCoffee={icedCoffee}
        handleClick={handleClick}
      />
    </>
  );
};

export default Menu;
