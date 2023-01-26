import React from "react";
import { Card } from "../Card/Card";
import "./menu.scss";

export const MenuComponent = ({
  handleClick,
  changeTypeOfCoffee,
  isHotCoffee,
  hotCoffee,
  icedCoffee,
}) => {
  return (
    <>
      <section className="coffee">
        <button className="toggle__button button" onClick={changeTypeOfCoffee}>
          See {isHotCoffee} coffees
        </button>

        {isHotCoffee === "Iced" ? (
          <>
            <h1 className="coffee__title">Hot Coffee</h1>
            <ul className="coffee__list">
              {hotCoffee.map((item) => (
                <Card key={item.id} item={item} handleClick={handleClick} />
              ))}
            </ul>
          </>
        ) : (
          <>
            <h1 className="coffee__title">Iced Coffee</h1>
            <ul className="coffee__list">
              {icedCoffee.map((item) => (
                <Card key={item.id} item={item} handleClick={handleClick} />
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
};
