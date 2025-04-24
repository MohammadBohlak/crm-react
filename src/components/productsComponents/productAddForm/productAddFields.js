import * as Yup from "yup";

  // تعريف الحقول
  export const productFields = [
    {
      name: "name",
      label: "Product Name",
      type: "text",
      required: true,
      placeholder: "Enter product name",
      col: 6,
    },
    {
      name: "price",
      label: "Price",
      type: "text",
      required: true,
      placeholder: "Enter price",
      col: 6,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Enter description",
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

  // القيم الأولية
  export const initialValues = {
    name: "",
    description: "",
    price: "",
  };