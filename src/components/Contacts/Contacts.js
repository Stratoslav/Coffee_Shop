import React from "react";
import "../Contacts/contacts.scss";
import { Footer } from "../Footer/Footer";
export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <h3 className="contacts__title">Enjoy Our Best Meal</h3>
        <p className="contacts__text">
          Lorem ipsum dolor sit amet, cosectetur adi piscing elit, sed do
          eiusmod tempor incididunt ut labore etdolore magna sed do eiusmod
          tempor incididunt ut labore etdolore
        </p>

        <a href="#" className="contacts__link">
          Contact us now
        </a>
      </div>
      <Footer />
    </section>
  );
};
