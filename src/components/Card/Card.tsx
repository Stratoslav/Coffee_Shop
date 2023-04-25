import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CardShopAction, CardTypes } from "../../redux/slice/sliceCardShop";
import "../Card/card.scss";
type Item = {
  item: CardTypes
}
export const Card = ({ item }: Item) => {
  const [click, setClick] = useState(false);
  const { id, image, title, description } = item;

 console.log(item.id < 20)
  const dispatch = useDispatch();

  function clicked() {
    dispatch(CardShopAction.handleClickCard(item));
    setClick(true);
  }
  return (
  <>
    { item.id < 20 ? (<li className="coffee__list-item cards" key={id}>
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
      </li>) : null}
      </>
  );
};
