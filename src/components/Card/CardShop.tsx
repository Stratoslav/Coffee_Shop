import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { CardShopAction } from "../../redux/slice/sliceCardShop";

import "../Card/cardShop.scss";
const CardShop = () => {
  const dispatch = useDispatch();
const [count, setCount] = useState(0)
  const {card, price} = useAppSelector((state) => state.cardShopReducer);
 
// console.log(countOfCoffee)
 
  
  return (
  <>
  {card.length > 0 ? (<ul className="cardShop">
      {card.map(({ id, image, coffee_name, description, price,count }) => (
        <li className="cardShop__wrap" key={id}>
          <div className="details cardShop__data">
            <img className="coffee__list-img" src={`http://localhost:5000/${image}`} alt={coffee_name} />
            <h3 className="cardShop__title">{coffee_name}</h3>
            <p className="cardShop__text">{description}</p>
            <p className="cardShop__price">price: {price} UAN</p>
          </div>
          <div className="form__cardShop">
            <label htmlFor="input-number-mod">
              Modified Spin-Buttons (just Chrome)
            </label>
            <input
              id="input-number-mod"
              className="mod"
              type="number"
              onClick={(e) => {
                dispatch(CardShopAction.handleTotalCount({ count: +e.currentTarget.value, price }))
                dispatch(CardShopAction.getInformationAboutOrder([{name: coffee_name, count: +e.currentTarget.value}]))
              }}
              min="1"
              step={1}
                           
            />
          
          
         
            <button
              className="cardShop__button"
              onClick={() => dispatch(CardShopAction.handleRemoveCard(id))}
            >
              Remove
            </button>
           
          </div>
        </li>
      ))}
      <span>Total price: ${price}UAN</span>
      {price > 0 && <NavLink to="/registration" className="cardShop__button ">
        make an order
      </NavLink>}
      </ul>) : (<div style={{'paddingTop': '100px'}}>To make order just add coffee</div>)}
      </>
  );
};

export default CardShop;
