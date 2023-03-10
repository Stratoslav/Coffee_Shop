import React from "react";
import "../Booking/booking.scss";
export const BookingComponent = ({ isErrorClass, isError, formik }) => {
  const { values, handleChange, isSubmitting, handleBlur, handleSubmit } =
    formik;
  return (
    <section className="booking" id="booking">
      <div className="booking__container">
        <h3 className="booking__title">BOOK NOW</h3>
        <p className="booking__text">
          Book Your Table Now And Have A Great Meal !
        </p>
        <form onSubmit={handleSubmit} className="booking__form">
          <div>
            <div className="booking__form-wrap">
              {" "}
              <label className="booking__form-label" htmlFor="name">
                Your full name
              </label>
              <br />
              <input
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                className={isErrorClass("name")}
                type="name"
                id="name"
                name="name"
                placeholder="Write your name here"
              />
              <div>{isError("name")}</div>
              <br />
              <label className="booking__form-label" htmlFor="address">
                Your address?
              </label>
              <br />
              <input
                onChange={handleChange}
                value={values.address}
                onBlur={handleBlur}
                className={isErrorClass("address")}
                type="string"
                id="address"
                name="address"
                placeholder="Write a drinks"
              />
              <div>{isError("address")}</div>
              <br />
              <label className="booking__form-label" htmlFor="date">
                What is the date?
              </label>
              <br />
              <input
                onChange={handleChange}
                value={values.date}
                onBlur={handleBlur}
                className={isErrorClass("date")}
                type="date"
                id="date"
                name="date"
              />
              <div>{isError("date")}</div>
              <br />
            </div>

            <div className="booking__form-wrap">
              <label className="booking__form-label" htmlFor="email">
                Your email address?
              </label>
              <br />
              <input
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                type="email"
                id="email"
                name="email"
                placeholder="Write your email here"
                className={isErrorClass("email")}
              />
              <div>{isError("email")}</div>

              <br />
              <label className="booking__form-label" htmlFor="time">
                What time?
              </label>
              <br />
              <input
                onChange={handleChange}
                value={values.time}
                onBlur={handleBlur}
                className={isErrorClass("time")}
                type="time"
                id="time"
                name="time"
              />
              <div>{isError("time")}</div>
              <br />
              <label className="booking__form-label" htmlFor="phone">
                Your phone number?
              </label>
              <br />
              <input
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                className={isErrorClass("phone")}
                type="number"
                id="phone"
                name="phone"
                placeholder="Write your number here"
              />
              <div>{isError("phone")}</div>
            </div>
          </div>

          <button
            disabled={isSubmitting}
            className="booking__form-button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
