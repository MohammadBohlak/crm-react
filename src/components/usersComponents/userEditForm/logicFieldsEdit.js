import * as Yup from "yup";

// تكوين الحقول
export const userFields = [
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
export const validationSchema = {
  role: Yup.string().required("Role is required"),
};
