import React, { useState } from "react";
import GenericAddForm from "../../common/genericForm/genericAddForm/GenericAddForm";
import { api } from "../../../utils/api/api";
import { ENDPOINTS } from "../../../utils/api/endPoints";
import CustomToast from "../../common/customToast/CustomToast";
import { initialValues, productFields, productValidationSchema } from "./productAddFields";
// import DynamicAddForm from './DynamicAddForm';

const ProductAddForm = () => {
 const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastIsError, setToastIsError] = useState(false);
  const [toastTitle, setToastTitle] = useState("") 

  const handleSubmit = (values, { resetForm }) => {
    console.log("Adding new products:", values);
    api.post(ENDPOINTS.PRODUCTS.CREATE, { ...values })
    .then((res) => {
      setToastIsError(false);
      setShowToast(true);
      setToastMessage("The product was successfully added"); 
      setToastTitle("Success"); 
      resetForm() ;
    }).catch((err) => {
      setToastIsError(true);
      const errorMessage =
        err.response?.data?.error || "An unexpected error occurred";
      setToastMessage(errorMessage);
      setShowToast(true);
      setToastTitle("Error")

      // إخفاء التوست تلقائياً بعد 5 ثواني
    })
    .finally(() => {
      setTimeout(() => setShowToast(false), 5000);
    });;
  };
  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <GenericAddForm
        fields={productFields}
        initialValues={initialValues}
        validationSchema={productValidationSchema}
        onSubmit={handleSubmit}
        submitText="Add Products"
        backPath="/products"
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

export default ProductAddForm;
