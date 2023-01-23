import React from "react";
import "./menu.scss";

export const MenuComponent = ({
  changeCoffee,
  isHotCoffee,
  hotCoffee,
  icedCoffee,
}) => {
  return (
    <>
      <section className="coffee">
        <button className="toggle__button button" onClick={changeCoffee}>
          See {isHotCoffee} coffees
        </button>

        {isHotCoffee === "Iced" ? (
          <>
            <h1 className="coffee__title">Hot Coffee</h1>
            <ul className="coffee__list">
              {hotCoffee.map(
                ({ id, description, image, ingredients, title }) => (
                  <li className="coffee__list-item" key={id}>
                    <img className="coffee__list-img" src={image} alt={title} />
                    <div>
                      <h3 className="coffee__list-title">{title}</h3>
                      <p className="coffee__list-text">{description}</p>
                      <p>ingredient:</p>
                      {ingredients.map((ingredient) => (
                        <span className="coffee__list-text">{ingredient}</span>
                      ))}
                    </div>
                  </li>
                )
              )}
            </ul>
          </>
        ) : (
          <>
            <h1 className="coffee__title">Iced Coffee</h1>
            <ul className="coffee__list">
              {icedCoffee.map(
                ({ id, description, image, ingredients, title }) => (
                  <li className="coffee__list-item" key={id}>
                    <img className="coffee__list-img" src={image} alt={title} />
                    <div>
                      <h3 className="coffee__list-title">{title}</h3>

                      <p className="coffee__list-text">{description}</p>
                      <p>ingredient:</p>
                      {ingredients.map((ingredient) => (
                        <span className="coffee__list-text">{ingredient}</span>
                      ))}
                    </div>
                  </li>
                )
              )}
            </ul>
          </>
        )}
      </section>
    </>
  );
};
