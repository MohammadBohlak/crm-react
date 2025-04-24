import React, { useEffect, useState } from "react";
import GenericEditForm from "../../common/genericForm/genericEditForm/GenericEditForm";
import { useNavigate, useParams } from "react-router-dom";
import { productFields, productValidationSchema } from "./productEditFields";
import { ENDPOINTS } from "../../../utils/api/endPoints";
import { api } from "../../../utils/api/api";

const ProductEditForm = () => {
  const [product, setProduct] = useState(undefined)
  const { id } = useParams();
  const navigate = useNavigate();

   useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await api.get(ENDPOINTS.PRODUCTS.GET_BY_ID(id));
          setProduct(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Failed to fetch product:", error);
          // navigate("/error"); // توجيه إلى صفحة الخطأ في حالة فشل الطلب
        }
      };
  
      if (id) {
        fetchProduct();
      }
    }, [id, navigate]);

    const handleSubmit = (values) => {
        api
          .put(ENDPOINTS.PRODUCTS.EDIT(id), { ...values })
          .then((res) => {
            console.log(res);
            navigate("/products")
          })
          .catch((err) => {
            console.log("err is ", err);
          });
      };
  return (
    <>
      {product && (
           <GenericEditForm
           fields={productFields}
           initialValues={product}
           validationSchema={productValidationSchema}
           onSubmit={handleSubmit}
           onCancel={() => {
             navigate("/products");
           }}
           submitText="Update Product"
         />
      )}
    </>
   
  );
};
export default ProductEditForm;
