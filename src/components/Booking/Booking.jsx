import React from "react";
import { BookingComponent } from "./BookingComponent";
import { useFormik } from "formik";
import basicSchema from "../schemas/schemas";

export const Booking = () => {
  const onSubmit = async (values, action) => {
    console.log(values);
    await new Promise((res) => setTimeout(res, 1000));
    action.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      address: "",
      date: "",
      time: "",
      phone: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const isError = (field) => {
    return formik.errors[field] && formik.touched[field] ? (
      <p className="errors__text">{formik.errors[field]}</p>
    ) : null;
  };
  let isErrorClass = (value) => {
    if (formik.errors[value] && formik.touched[value]) {
      return "input__error";
    } else {
      return "booking__form-input";
    }
  };
  return (
    <>
      <BookingComponent
        isError={isError}
        isErrorClass={isErrorClass}
        formik={formik}
      />
    </>
  );
};
