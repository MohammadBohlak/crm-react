import React, { useEffect, useState } from "react";
import GenericAddForm from "../../common/genericForm/genericAddForm/GenericAddForm";
import { saleInitialValues, saleValidationSchema } from "./logicFieldsSale";
import { api } from "../../../utils/api/api";
import { ENDPOINTS } from "../../../utils/api/endPoints";
import CustomToast from "../../common/customToast/CustomToast";
// import DynamicAddForm from './DynamicAddForm';

const SaleAddForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastIsError, setToastIsError] = useState(true);
  const [toastTitle, setToastTitle] = useState("");

  const handleSubmit = (values, { resetForm }) => {
    api
      .post(ENDPOINTS.SALES.GET, { ...values })
      .then((res) => {
        console.log(res);
        setToastIsError(false);
        setShowToast(true);
        setToastMessage("The sale was successfully added");
        setToastTitle("Success");
        resetForm();
      })
      .catch((err) => {
        setToastIsError(true);
        const errorMessage =
          err.response?.data?.error || "An unexpected error occurred";
        setToastMessage(errorMessage);
        setShowToast(true);
        setToastTitle("Error");
      })
      .finally(() => {
        setTimeout(() => setShowToast(false), 5000);
      });
  };
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    Promise.all([
      api.get(ENDPOINTS.PRODUCTS.GET),
      api.get(ENDPOINTS.USERS.GET_CUSTOMERS),
    ])
      .then(([productsRes, customersRes]) => {
        setProducts(
          productsRes.data.map((e) => ({
            value: e.name,
            label: e.name,
          }))
        );
        setCustomers(
          customersRes.data.map((e) => ({
            value: e.userName,
            label: e.userName,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const saleFields = [
    {
      name: "customerName",
      label: "Customer name",
      type: "select",
      required: true,
      options: customers,
      col: 4,
    },
    {
      name: "productName",
      label: "Product name",
      type: "select",
      required: true,
      options: products,
      col: 4,
    },
   
    {
      name: "amount",
      label: "Amount",
      type: "text",
      required: true,
      placeholder: "Enter amount",
      col: 4,
    },
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
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "phone",
      col: 6,
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Add New Sale</h2>
      <GenericAddForm
        fields={saleFields}
        initialValues={saleInitialValues}
        validationSchema={saleValidationSchema}
        onSubmit={handleSubmit}
        submitText="Add User"
        backPath="/sales"
      />
      {showToast && (
        <CustomToast
          isError={toastIsError}
          toastMessage={toastMessage}
          toastTitle={toastTitle}
        />
      )}
    </div>
  );
};

export default SaleAddForm;
