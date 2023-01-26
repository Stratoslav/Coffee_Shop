import React from "react";
import "../Card/card.scss";

export const Card = ({ item, handleClick }) => {
  const { id, image, title, description, ingredients } = item;
  return (
    <li className="coffee__list-item cards" key={id}>
      <div className="image__box">
        <img className="coffee__list-img" src={image} alt={title} />
      </div>

      <div className="details">
        <h3 className="coffee__list-title">{title}</h3>
        <p className="coffee__list-text">{description}</p>
        <p>ingredient:</p>
        {ingredients.map((ingredient) => (
          <span className="coffee__list-text">{ingredient}</span>
        ))}
        <p className="coffee__list-price">30 $</p>
        <button
          className="coffee__list-button"
          onClick={() => handleClick(item)}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};
