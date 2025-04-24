import React, { useEffect, useState } from "react";
// import GenericEditForm from './GenericEditForm';
import GenericEditForm from "../../common/genericForm/genericEditForm/GenericEditForm";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { ENDPOINTS } from "../../../utils/api/endPoints";
import { customerFields, validationSchema } from "./fieldsLogic";

const CustomerEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(undefined);
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get(ENDPOINTS.USERS.GET_BY_ID(id));
        setCustomer(response.data);
      } catch (error) {
        console.error("Failed to fetch customer:", error);
        // navigate("/error"); // توجيه إلى صفحة الخطأ في حالة فشل الطلب
      }
    };

    if (id) {
      fetchCustomer();
    }
  }, [id, navigate]);

  const handleSubmit = (values) => {
    api
      .put(ENDPOINTS.USERS.EDIT(id), { ...values })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  };

  return (
    <>
      {customer && (
        <GenericEditForm
          fields={customerFields}
          initialValues={customer || {}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          onCancel={() => {
            navigate("/customers");
          }}
          submitText="Update Customer"
        />
      )}
    </>
  );
};
export default CustomerEditForm;
