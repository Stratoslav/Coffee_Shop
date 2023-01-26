import * as yup from "yup";

const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  name: yup.string().required("Required"),
  time: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  date: yup
    .date()
    .required("We need to know, whats time order must be delivered"),
  address: yup.string().required("Please, enter your address"),
});

export default basicSchema;
