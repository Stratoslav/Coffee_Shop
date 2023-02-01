import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CardShopAction } from "../../redux/slice/sliceCardShop";
import "../Card/card.scss";

export const Card = ({ item }) => {
  const [click, setClick] = useState(false);
  const { id, image, title, description, ingredients } = item;
  console.log(...ingredients);

  const dispatch = useDispatch();

  function clicked() {
    dispatch(CardShopAction.handleClickCard(item));
    setClick(true);
  }
  return (
    <li className="coffee__list-item cards" key={id}>
      <div className="image__box">
        <img
          height={300}
          className="coffee__list-img"
          src={image}
          alt={title}
        />
      </div>

      <div className="details">
        <h3 className="coffee__list-title">{title}</h3>
        <p className="coffee__list-text">{description}</p>
        <p>ingredient:</p>
        {/* {ingredients.map((ingredient) => (
          <span className="coffee__list-text">{ingredient}</span>
        ))} */}

        <p className="coffee__list-price">30 $</p>
        <button
          disabled={click}
          className="coffee__list-button"
          onClick={() => clicked()}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};
