import React, { useEffect, useState } from "react";
import GenericTable from "../common/genericTable/GenericTable";
import { api } from "../../utils/api/api";
import { ENDPOINTS } from "../../utils/api/endPoints";

function RemovedSalesTable() {
  const [sales, setSales] = useState([]);

  const getSales = () => {
    api.get(ENDPOINTS.SALES.DELETED).then((res) => {
      setSales(res.data);
    });
  };
  useEffect(() => {
    getSales();
  }, []);

  const handleRestore = (id) => {
    if (Array.isArray(id)) {
      Promise.all(
        id.map((singleId) => api.put(ENDPOINTS.SALES.RESTORE(singleId)))
      )
        .then((res) => {
          getSales();
        })
        .catch((err) => {
          console.log("Error while deleting items:", err);
        });
    } else {
      api
        .put(ENDPOINTS.SALES.RESTORE(id))
        .then((res) => {
          console.log(res);
          getSales();
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
        id.map((singleId) => api.delete(ENDPOINTS.SALES.DEL(singleId)))
      )
        .then((res) => {
          getSales();
        })
        .catch((err) => {
          console.log("Error while deleting items:", err);
        });
    } else {
      // Delete a single item as in the original function
      api
        .delete(ENDPOINTS.SALES.DEL(id))
        .then((res) => {
          console.log(res);
          getSales();
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
        title={"Removed Sales"}
        data={sales}
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
            key: "customerPhone",
            header: "Phone",
            render: (item) => <a href= {`tel:${item.phone}`}> {item.phone} </a>
          }
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

export default RemovedSalesTable;