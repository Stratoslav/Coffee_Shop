/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";

import { NavLink } from "react-router-dom";

import { useGetHotCoffQuery } from "../../api/coffeeApi";

import { Card } from "../Card/Card";
import "./menu.scss";

export const MenuComponent = ({ changeTypeOfCoffee, isHotCoffee }) => {
  // const info = useGetIcedCoffeeQuery();

  let { data, isLoading } = useGetHotCoffQuery();
  if (data !== undefined) {
    // console.log((data.length = 18));
    // let arr = data.splice(6, 6);
    // // data.length = 18;
  }

  // let spliceData;
  // if (data) {
  //   spliceData = data.splice(10, 10);
  // }
  // console.log(spliceData);
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
        {isLoading ? (
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
        )}
        {/* {isHotCoffee === "Iced" ? (
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
        ) :
          info.isLoading ? (
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
        )} */}
      </section>
    </>
  );
};
