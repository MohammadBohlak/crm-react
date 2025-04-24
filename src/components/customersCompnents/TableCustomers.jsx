import React, { useEffect, useState } from "react";
import GenericTable from "../common/genericTable/GenericTable";
import { api } from "../../utils/api/api";
import { ENDPOINTS } from "../../utils/api/endPoints";
 
function TableCustomers() {

  const [customers, setCustomers] = useState([])
  
  const getCustomers = () => {
    api.get(ENDPOINTS.USERS.GET_CUSTOMERS)
    .then((res) => {
      setCustomers(res.data)
    })
  }
  useEffect(() => {
    getCustomers()
  }, [])

  const handleDelete = (id) => {
    if (Array.isArray(id)) {
        // Delete multiple items if `id` is an array
        Promise.all(id.map(singleId => api.delete(ENDPOINTS.USERS.DEL_SOFT(singleId))))
            .then(res => {
                getCustomers();
            })
            .catch(err => {
                console.log("Error while deleting items:", err);
            });
    } else {
        // Delete a single item as in the original function
        api.delete(ENDPOINTS.USERS.DEL_SOFT(id))
            .then(res => {
                console.log(res);
                getCustomers();
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }
};

  return (
    <>
      <GenericTable
        noAdd= {true}
        links= {{add: "/addCustomer" , edit: "/editCustomer"}}
        title={"Customers"}
        data={customers}
        filters={{key: "status", states: ["active", "inactive", "lead"]}}
        columns={[
          {
            key: "userName",
            header: "Name",
            render: (item) => <strong>{item.userName}</strong>,
          },
          {
            key: "email",
            header: "Email",
          },
          {
            key: "status",
            header: "Status",
            render: (item) => (
              <span
                style={{
                  color: "white",
                  backgroundColor:
                    item.status === "active"
                      ? "green"
                      : item.status === "lead"
                      ? "orange"
                      : "red",
                  fontWeight: "500",
                  padding: "2px",
                  fontSize: "1rem",
                }}
              >
                {item.status.toUpperCase()}
              </span>
            ),
          },
          {
            key: "company",
            header: "Company",
          },
          {
            key: "phone",
            header: "Phone",
            render: (item) => <a href= {`tel:${item.phone}`}> {item.phone} </a>
          }
        ]}
        identifier="_id"
        onDelete={handleDelete}
        onBulkDelete={handleDelete}
        onEdit={(item) => {}}
      />
     
    </>
  );
}

export default TableCustomers;
