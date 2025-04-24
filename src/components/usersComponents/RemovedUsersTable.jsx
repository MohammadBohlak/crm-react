import React, { useEffect, useState } from "react";
import GenericTable from "../common/genericTable/GenericTable";
import { api } from "../../utils/api/api";
import { ENDPOINTS } from "../../utils/api/endPoints";

function RemovedUsersTable() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    api.get(ENDPOINTS.USERS.DELETED).then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleRestore = (id) => {
    if (Array.isArray(id)) {
      Promise.all(
        id.map((singleId) => api.put(ENDPOINTS.USERS.RESTORE(singleId)))
      )
        .then((res) => {
          getUsers();
        })
        .catch((err) => {
          console.log("Error while deleting items:", err);
        });
    } else {
      api
        .put(ENDPOINTS.USERS.RESTORE(id))
        .then((res) => {
          console.log(res);
          getUsers();
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  };
  const handleDelete = (id) => {
    if (Array.isArray(id)) {
      // Delete multiple items if `id` is an array
      Promise.all(
        id.map((singleId) => api.delete(ENDPOINTS.USERS.DEL(singleId)))
      )
        .then((res) => {
          getUsers();
        })
        .catch((err) => {
          console.log("Error while deleting items:", err);
        });
    } else {
      // Delete a single item as in the original function
      api
        .delete(ENDPOINTS.USERS.DEL(id))
        .then((res) => {
          console.log(res);
          getUsers();
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }

  return (
    <>
      <GenericTable
        noAdd={true}
        noEdit={true}
        links={{ add: "/addCustomer", edit: "/editCustomer" }}
        title={"Removed Users"}
        filters={{key:"role", states:["admin", "customer"]}}

        data={users}
        columns={[
          {
            key: "email",
            header: "Email",
          },
          {
            key: "role",
            header: "Role"
          },
        ]}
        identifier="_id"
        onDelete={handleDelete}
        onBulkDelete={handleDelete}
        onEdit={(item) => {}}
        Restore={true}
        handleRestore={handleRestore}
      />
    </>
  );
}

export default RemovedUsersTable;