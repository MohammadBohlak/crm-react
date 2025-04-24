import * as Yup from "yup";

// تكوين الحقول
export const productFields = [
  {
    name: "name",
    label: "Product Name",
    type: "text",
    required: true,
    col: 6,
  },
  {
    name: "price",
    label: "Price",
    type: "text",
    required: true,
    col: 6,
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    col: 6,
  },
];

// مخطط التحقق
export const productValidationSchema = {
  name: Yup.string().required("Product Name is required").trim(),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price cannot be negative")
    .typeError("Price must be a number"),
};
