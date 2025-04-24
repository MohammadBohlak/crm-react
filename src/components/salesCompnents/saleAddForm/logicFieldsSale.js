import * as Yup from "yup";

// مخطط التحقق

export const saleValidationSchema = {
  customerName: Yup.string().required("Customer name is required"),
  productName: Yup.string().required("Product name is required"),
  phone: Yup.string(),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be a positive number")
    .required("Amount is required"),
  status: Yup.string()
    .oneOf(["pending", "completed", "canceled", "refunded"], "Invalid status")
    .required("Status is required"),
};

// القيم الأولية
export const saleInitialValues = {
  customerName: "",
  productName: "",
  phone: "",
  amount: "",
  status: "completed",
};
