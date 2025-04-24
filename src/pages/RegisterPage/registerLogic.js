import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
  userName: yup
    .string()
    .required("Required")
    .min(3, "Username must be at least 3 characters"),
  role: yup.string().required("Please select a role"),
  phone: yup.string().trim(),
  company: yup.string().trim(),
  status: yup.string()
    .required("Status is required")
    .oneOf(["lead", "active", "inactive"], "Invalid status"),
});

export const registerFields = [
  {
    name: "userName",
    type: "text",
    placeholder: "Choose a username",
    label: "Username",
    required: true,
  },
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
    placeholder: "Create a password",
    label: "Password",
    required: true,
  },
  {
    name: "phone",
    type: "phone",  
  },
  {
    name: "role",
    type: "select",
    label: "Role",
    required: true,
    options: [
      { value: "admin", label: "Admin" },
      { value: "customer", label: "Customer" },
    ],
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    required: false,
    placeholder: "Enter company name",
  
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    options: [
      { value: "lead", label: "Lead" },
      { value: "active", label: "Active" },
      { value: "inactive", label: "Inactive" },
    ],
  
  },
];
export const initialValues = {
  email: '',
  password: '',
  userName: '',
  role: '', // سيتم تعيينها من خيارات الـ select
  phone: '',
  company: '',
  status: 'lead' // يمكن وضع قيمة افتراضية مثل 'lead'
};