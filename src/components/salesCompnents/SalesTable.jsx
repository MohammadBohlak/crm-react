import React, { useEffect, useState } from "react";
import GenericTable from "../common/genericTable/GenericTable";
import { api } from "../../utils/api/api";
import { ENDPOINTS } from "../../utils/api/endPoints";
 
function SalesTable() {

  const [sales, setSales] = useState([])
  
  const getSales = () => {
    api.get(ENDPOINTS.SALES.GET)
    .then((res) => {
      setSales(res.data)
    })
  }
  useEffect(() => {
    getSales()
  }, [])

  const handleDelete = (id) => {
    if (Array.isArray(id)) {
        // Delete multiple items if `id` is an array
        Promise.all(id.map(singleId => api.delete(ENDPOINTS.SALES.DEL_SOFT(singleId))))
            .then(res => {
                getSales();
            })
            .catch(err => {
                console.log("Error while deleting items:", err);
            });
    } else {
        // Delete a single item as in the original function
        api.delete(ENDPOINTS.SALES.DEL_SOFT(id))
            .then(res => {
                console.log(res);
                getSales();
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }
};

  return (
    <>
      <GenericTable
        links= {{add: "/addSale", edit:"/editSale"}}
        // noEdit={true}
        title={"Sales"}
        data={sales}
        filters={{key: "status", states:  ["pending", "completed", "canceled", "refunded"]}}
        columns={[
          {
            key: "customerName",
            header: "Customer Name",
          },
          {
            key: "productName",
            header: "Product Name",
          },
          {
            key: "amount",
            header: "Amount",
          },
          {
            key: "status",
            header: "Status",
            render: (item) => (
              <span
                style={{
                  color: "white",
                  backgroundColor:
                    item.status === "pending"
                      ? "#FFC107"
                      : item.status === "completed"
                      ? "#4CAF50"
                      : item.status === "canceled"
                      ? "#F44336"
                      : item.status === "refunded"
                      ? "#2196F3"
                      : "gray", // لون افتراضي للحالات غير المعرفة
                  fontWeight: "500",
                  padding: "2px",
                  fontSize: "1rem",
                }}
              >
                {item.status.toUpperCase()}
              </span>
            )
            
          },
          {
            key: "customerPhone",
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

export default SalesTable;
