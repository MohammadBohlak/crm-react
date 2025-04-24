import * as Yup from "yup";

// تعريف الحقول
export const userFields = [
  {
    name: "userName",
    label: "User name",
    type: "text",
    required: true,
    placeholder: "Enter user name",
    col: 6,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "Enter user email",
    col: 6,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    placeholder: "Enter Password",
    col: 6,
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    required: false,
    options: [
      { value: "admin", label: "Admin" },
      { value: "customer", label: "Customer" },
    ],
    col: 6,
  },
];

// مخطط التحقق
export const userValidationSchema = {
  userName: Yup.string().required("User name is required").trim(),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .trim()
    .lowercase()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"),
  password: Yup.string().required("Password is required").trim(),
  role: Yup.string()
    .required("Role is required")
    .oneOf(["admin", "customer"], "Invalid role"),
};

// القيم الأولية
export const initialValues = {
  email: "",
  role: "customer",
  password: "",
};
