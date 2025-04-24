import React, { useEffect, useState } from "react";
import GenericEditForm from "../../common/genericForm/genericEditForm/GenericEditForm";
import { useNavigate, useParams } from "react-router-dom";
import { userFields, validationSchema } from "./logicFieldsEdit";
import { api } from "../../../utils/api/api";
import { ENDPOINTS } from "../../../utils/api/endPoints";

const UserEditForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(ENDPOINTS.USERS.GET_BY_ID(id));
        setUser(response.data.data);
      } catch (error) {
        console.error("Failed to fetch customer:", error);
      }
    };

    if (id) {
      fetchUser();
    } 
  }, [id, navigate]);

  const handleSubmit = (values) => {
    api
      .put(ENDPOINTS.USERS.EDIT(id), { ...values })
      .then((res) => {
        navigate("/users");
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  };

  return (
    <>
     {user && (
        <GenericEditForm
          fields={userFields}
          initialValues={user || {}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          onCancel={() => {
            navigate("/users");
          }}
          submitText="Update User"
        />
      )}
    </>
  );
};
export default UserEditForm;
