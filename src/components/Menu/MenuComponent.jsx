import React from "react";
import { NavLink } from "react-router-dom";
import { useGetHotCoffQuery, useGetIcedCoffeeQuery } from "../../api/coffeeApi";

import { Card } from "../Card/Card";
import "./menu.scss";

export const MenuComponent = ({ changeTypeOfCoffee, isHotCoffee }) => {
  const info = useGetIcedCoffeeQuery();

  const { data, isLoading } = useGetHotCoffQuery();

  return (
    <>
      <NavLink className="coffee__link" to="/not-found">
        <marquee className="coffee__share">
          ONLY THIS WEEK! COFFEE PROMOTION -40%
          <strong> CLICK TO FIND OUT MORE</strong>
        </marquee>
      </NavLink>

      <section className="coffee">
        <button className="toggle__button button" onClick={changeTypeOfCoffee}>
          See {isHotCoffee} coffees
        </button>

        {isHotCoffee === "Iced" ? (
          isLoading ? (
            <h1>Loading</h1>
          ) : (
            <>
              <h1 className="coffee__title">Hot Coffee</h1>
              <ul className="coffee__list">
                {data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </ul>
            </>
          )
        ) : info.isLoading ? (
          <h1>Loading</h1>
        ) : (
          <>
            <h1 className="coffee__title">Iced Coffee</h1>
            <ul className="coffee__list">
              {info.data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
};
