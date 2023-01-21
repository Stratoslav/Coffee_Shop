import React from "react";
import "../Booking/booking.scss";
import { Field, Form, Formik, useFormik } from "formik";
import basicSchema from "../schemas/schemas";
export const BookingComponent = () => {
  const onSubmit = async (values, action) => {
    await new Promise((res) => setTimeout(res, 1000));
    action.resetForm();
  };
  const {
    values,
    handleChange,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      people: "",
      date: "",
      time: "",
      phone: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const isError = (field) => {
    return errors[field] && touched[field] ? (
      <p className="errors__text">{errors[field]}</p>
    ) : null;
  };
  let isErrorClass = (value) => {
    if (errors[value] && touched[value]) {
      return "input__error";
    } else {
      return "booking__form-input";
    }
  };

  return (
    <section className="booking">
      <div className="booking__container">
        <h3 className="booking__title">BOOK NOW</h3>
        <p className="booking__text">
          Book Your Table Now And Have A Great Meal !
        </p>
        <form onSubmit={handleSubmit} className="booking__form">
          <div>
            <div className="booking__form-wrap">
              {" "}
              */
              <label className="booking__form-label" for="name">
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
              <label className="booking__form-label" for="people">
                How many people?
              </label>
              <br />
              <input
                onChange={handleChange}
                value={values.people}
                onBlur={handleBlur}
                className={isErrorClass("people")}
                type="number"
                id="people"
                name="people"
                placeholder="people"
              />
              <div>{isError("people")}</div>
              <br />
              <label className="booking__form-label" for="date">
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
              <label className="booking__form-label" for="email">
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
              <label className="booking__form-label" for="time">
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
              <label className="booking__form-label" for="phone">
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
