import * as Yup from "yup";
// تكوين الحقول
export const saleFields = [
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    options: [
      { value: "pending", label: "Pending" },
      { value: "completed", label: "Completed" },
      { value: "canceled", label: "Canceled" },
      { value: "refunded", label: "Refunded" },
    ],
    col: 6,
  }
  ];
export const saleValidationSchema = {
  status: Yup.string()
    .oneOf(["pending", "completed", "canceled", "refunded"], "Invalid status")
    .required("Status is required"),
};
