import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CardShopAction, CardTypes } from "../../redux/slice/sliceCardShop";
import "../Card/card.scss";
type Item = {
  item: CardTypes
}
export const Card = ({ item }: Item) => {
  const [click, setClick] = useState(false);
  const { id, image, coffee_name, description, ingredients, price } = item;

 console.log(item.id < 20)
  const dispatch = useDispatch();

  function clicked() {
    dispatch(CardShopAction.handleClickCard(item));
    setClick(true);
  }
  console.log(`http://localhost:5000/${ image }`)
  return (
  <>
    {<li className="coffee__list-item cards" key={id}>
      <div className="image__box">
        <img
            height={300}
            width={'auto'}
            className="coffee__list-img" 
          src={`http://localhost:5000/${image}`}
            alt={coffee_name}
        />
      </div>

      <div className="details">
        <h3 className="coffee__list-title">{coffee_name}</h3>
        <p className="coffee__list-text">{description}</p>
        <p ><strong>ingredient</strong></p>
          <div>{ingredients}</div>

          <p className="coffee__list-price">price: {price} UAN</p>
        <button
          disabled={click}
          className="coffee__list-button"
          onClick={() => clicked()}
          type="button"
        >
          Add to Cart
        </button>
      </div>
      </li>}
      </>
  );
};
