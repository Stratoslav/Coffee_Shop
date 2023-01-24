import React, { useEffect, useState } from "react";
import axios from "axios";
import "./menu.scss";
import { MenuComponent } from "./MenuComponent";

export const Menu = ({ handleClick }) => {
  let [hotCoffee, setHotCoffee] = useState([]);
  let [icedCoffee, setIcedCoffee] = useState([]);
  let [isHotCoffee, setIsHotCoffee] = useState("Hot");

  useEffect(() => {
    axios.get(`https://api.sampleapis.com/coffee/hot`).then((res) => {
      setHotCoffee(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`https://api.sampleapis.com/coffee/iced`).then((res) => {
      setIcedCoffee(res.data);
    });
  }, []);
  const changeCoffee = (e) => {
    isHotCoffee === "Hot" ? setIsHotCoffee("Iced") : setIsHotCoffee("Hot");
  };

  return (
    <>
      <MenuComponent
        changeCoffee={changeCoffee}
        isHotCoffee={isHotCoffee}
        hotCoffee={hotCoffee}
        icedCoffee={icedCoffee}
        handleClick={handleClick}
      />
    </>
  );
};
