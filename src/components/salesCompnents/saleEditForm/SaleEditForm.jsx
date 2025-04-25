import React, { useEffect, useState } from "react";
import GenericEditForm from "../../common/genericForm/genericEditForm/GenericEditForm";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { ENDPOINTS } from "../../../utils/api/endPoints";
import { saleFields, saleValidationSchema } from "./fieldsLogic";

const SaleEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sale, setSale] = useState(undefined);
  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await api.get(ENDPOINTS.SALES.GET_BY_ID(id));
        setSale(response.data);
      } catch (error) {
        console.error("Failed to fetch sale:", error);
        // navigate("/error"); // توجيه إلى صفحة الخطأ في حالة فشل الطلب
      }
    };

    if (id) {
      fetchSales();
    }
  }, [id, navigate]);

  const handleSubmit = (values) => {
    api
      .put(ENDPOINTS.SALES.EDIT(id), { ...values })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  };

  return (
    <>
      {sale && (
        <GenericEditForm
          fields={saleFields}
          initialValues={sale || {}}
          validationSchema={saleValidationSchema}
          onSubmit={handleSubmit}
          onCancel={() => {
            navigate("/sales");
          }}
          submitText="Update Sale"
        />
      )}
    </>
  );
};
export default SaleEditForm;
