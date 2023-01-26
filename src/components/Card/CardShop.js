import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import "../Card/cardShop.scss";
const CardShop = ({ cart, setCart, handleChange }) => {
  let [count, setCount] = useState(1);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handleCount();
  };
  // const handleCount = () => {
  //   let num = 0;
  //   cart.map((item) => (num += 1));
  //   setCount(num);
  // };
  const handleIncriment = () => {
    setCount((count += 1));
  };
  const handleDicriment = () => {
    if (count !== 0) {
      setCount((count -= 1));
    }
  };

  // useEffect(() => {
  //   // handleCount();
  // }, []);
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
            <button
              className="cardShop__button"
              onClick={() => handleIncriment()}
            >
              +
            </button>
            <span className="cardShop__number">{count}</span>
            <button
              className="cardShop__button"
              onClick={() => handleDicriment()}
            >
              -
            </button>
            <button
              className="cardShop__button"
              onClick={() => handleRemove(id)}
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
