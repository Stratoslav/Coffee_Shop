import React from "react";
import "../Contacts/contacts.scss";
import { Footer } from "../Footer/Footer";
export const Contacts = () => {
  return (
    <>
      <section className="contacts">
        <div className="contacts__container">
          <h3 className="contacts__title">Enjoy Our Best Coffee</h3>
          <p className="contacts__text">
            Lorem ipsum dolor sit amet, cosectetur adi piscing elit, sed do
            eiusmod tempor incididunt ut labore etdolore magna sed do eiusmod
            tempor incididunt ut labore etdolore
          </p>
          <div className="contacts__wrap">
            <a href="#c" className="contacts__link">
              Contact us now
            </a>
          </div>
        </div>
        <div>
          <img
            width={600}
            height={"auto"}
            alt=""
            src="https://img.freepik.com/free-vector/coffee-cup-beans-vintage-retro-styles-vector_1268-21322.jpg?w=360&t=st=1682453934~exp=1682454534~hmac=948ec3ef8217fb96c2cc08cab3fcc191e8ddfe24e5644a6187a90eb1a12c522f"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};
