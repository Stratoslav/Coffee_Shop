import React, { useState } from "react";
import { BookingComponent } from "./BookingComponent";
import { Formik } from "formik";
import { useFormik } from "formik";

export const Booking = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  //   handleChange: (event) => {
  //     console.log(event.target.value);
  //     setEmail((prevValues) => ({
  //       [email]: event.target.value,
  //     }));
  //   },
  //   handleSubmit: (e) => {
  //     e.preventDefault();
  //   },
  // });

  return (
    <>
      <BookingComponent />
      {/* 
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form> */}
    </>
  );
};
