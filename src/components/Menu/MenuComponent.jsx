/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";

import { NavLink } from "react-router-dom";

import { useGetHotCoffQuery } from "../../api/coffeeApi";

import { Card } from "../Card/Card";
import "./menu.scss";

export const MenuComponent = ({ changeTypeOfCoffee, isHotCoffee }) => {
  let { data, isLoading } = useGetHotCoffQuery();

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
              {data.length > 0 && data !== undefined ? (
                data.map((item) => <Card key={item.id} item={item} />)
              ) : (
                <div>
                  Sorry, but you can't see the slider and other information
                  because the server is running on the local machine :(
                </div>
              )}
            </ul>
          </>
        )}
      </section>
    </>
  );
};
