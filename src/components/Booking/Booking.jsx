import React, { useState } from "react";
import { BookingComponent } from "./BookingComponent";
import { useFormik } from "formik";
import basicSchema from "../schemas/schemas";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { usePostOrderMutation } from "../../api/coffeeApi";
import PopUpBookingOrder from "./PopUpBookingOrder";
import { bookingAction } from "../../redux/slice/sliceBooking";

export const Booking = () => {
  const [postOrder, { isLoading, isError: isErrorOrder }] =
    usePostOrderMutation();
  const { price, order } = useAppSelector((s) => s.cardShopReducer);
  const dispatch = useAppDispatch();

  const onSubmit = async (values, action) => {
    postOrder(values);
    dispatch(bookingAction.getOrderMenu(values));
    console.log(values);
    if (isErrorOrder) {
      console.log("isErrorOrder", isErrorOrder);
    }

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
      order: order,
      price: price,
      drinks: "",
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
