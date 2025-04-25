import React, { useState } from "react";
import GenericAddForm from "../../common/genericForm/genericAddForm/GenericAddForm";
import {
  initialValues,
  userFields,
  userValidationSchema,
} from "./logicFieldsUser";
import { api } from "../../../utils/api/api";
import { ENDPOINTS } from "../../../utils/api/endPoints";
import CustomToast from "../../common/customToast/CustomToast";

const UserAddForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastIsError, setToastIsError] = useState(true);
  const [toastTitle, setToastTitle] = useState("");

  const handleSubmit = (values, { resetForm }) => {
    api
      .post(ENDPOINTS.AUTH.REGISTER, { ...values })
      .then((res) => {
        console.log(res);
        setToastIsError(false);
        setShowToast(true);
        setToastMessage("The user was successfully added");
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
  return (
    <div className="container mt-4">
      <h2>Add New User</h2>
      <GenericAddForm
        fields={userFields}
        initialValues={initialValues}
        validationSchema={userValidationSchema}
        onSubmit={handleSubmit}
        submitText="Add User"
        backPath="/users"
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

export default UserAddForm;
