import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

export const loginFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    required: true,
  },
];
