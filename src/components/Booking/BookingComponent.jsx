import React from "react";
import "../Booking/booking.scss";
export const BookingComponent = () => {
  return (
    <section className="booking">
      <div className="booking__container">
        <h3 className="booking__title">BOOK NOW</h3>
        <p className="booking__text">
          Book Your Table Now And Have A Great Meal !
        </p>

        <form className="booking__form">
          <div>
            <div className="booking__form-wrap">
              <label className="booking__form-label" for="name">
                Your full name
              </label>
              <br />
              <input
                className="booking__form-input"
                type="name"
                id="name"
                name="name"
                placeholder="Write your name here"
              />
              <br />
              <label className="booking__form-label" for="people">
                How many people?
              </label>
              <br />
              <input
                className="booking__form-input"
                type="number"
                id="people"
                name="fname"
                placeholder="people"
              />
              <br />
              <label className="booking__form-label" for="date">
                What is the date?
              </label>{" "}
              <br />
              <input
                className="booking__form-input"
                type="date"
                id="date"
                name="date"
                value="2023-01-19"
              />
            </div>
            <div className="booking__form-wrap">
              <label className="booking__form-label" for="email">
                Your email address?
              </label>
              <br />
              <input
                className="booking__form-input"
                type="email"
                id="email"
                name="email"
                placeholder="Write your email here"
              />
              <br />
              <label className="booking__form-label" for="time">
                What time?
              </label>
              <br />
              <input
                className="booking__form-input"
                type="time"
                id="time"
                name="time"
              />
              <br />
              <label className="booking__form-label" for="phone">
                Your phone number?
              </label>
              <br />
              <input
                className="booking__form-input"
                type="number"
                id="phone"
                name="phone"
                placeholder="Write your number here"
              />
            </div>
          </div>

          <button className="booking__form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
