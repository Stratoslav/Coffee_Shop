import * as yup from "yup";

const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  name: yup.string().required("Required"),
  time: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  date: yup.date().required(),
  people: yup.number().required().positive().integer(),
});

export default basicSchema;
