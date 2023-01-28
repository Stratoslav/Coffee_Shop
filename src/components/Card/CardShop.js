import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CardShopAction } from "../../redux/slice/sliceCardShop";

import "../Card/cardShop.scss";
const CardShop = () => {
  const dispatch = useDispatch();

  // const { count } = useSelector((state) => state.cardShopReducer);
  const addMountOfCoffee = (e) => {
    console.log(e);
    if (Number(e.target.value) <= 0) {
      return (e.target.value = 0);
    }
  };
  const cart = useSelector((state) => state.cardShopReducer.card);
  return (
    <ul className="cardShop">
      {cart.map(({ id, image, title, ingredients, description }) => (
        <li className="cardShop__wrap" key={id}>
          <div className="details cardShop__data">
            <img className="coffee__list-img" src={image} alt={title} />
            <h3 className="cardShop__title">{title}</h3>
            <p className="cardShop__text">{description}</p>
            <p className="cardShop__price">30 $</p>
          </div>
          <div>
            <input disabled type="" onClick={addMountOfCoffee} />
            {/* <button
              className="cardShop__button"
              onClick={(e) =>
                dispatch(CardShopAction.handleIncrement(e.target.value))
              }
            >
              +
            </button>
            <span className="cardShop__number">{count}</span>
            <button
              className="cardShop__button"
              onClick={(e) =>
                dispatch(CardShopAction.handleDecrement(e.target.value))
              }
            >
              -
            </button> */}

            <button
              className="cardShop__button"
              onClick={() => dispatch(CardShopAction.handleRemoveCard(id))}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
      <NavLink to="/registration" className="cardShop__button ">
        make an order
      </NavLink>
    </ul>
  );
};

export default CardShop;
