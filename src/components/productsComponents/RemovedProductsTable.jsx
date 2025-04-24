import React, { useEffect, useState } from "react";
import GenericTable from "../common/genericTable/GenericTable";
import { api } from "../../utils/api/api";
import { ENDPOINTS } from "../../utils/api/endPoints";

function RemovedProductsTable() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    api.get(ENDPOINTS.PRODUCTS.DELETED).then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleRestore = (id) => {
    if (Array.isArray(id)) {
      Promise.all(
        id.map((singleId) => api.put(ENDPOINTS.PRODUCTS.RESTORE(singleId)))
      )
        .then((res) => {
          getProducts();
        })
        .catch((err) => {
          console.log("Error while deleting items:", err);
        });
    } else {
      api
        .put(ENDPOINTS.PRODUCTS.RESTORE(id))
        .then((res) => {
          console.log(res);
          getProducts();
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
        id.map((singleId) => api.delete(ENDPOINTS.PRODUCTS.DEL(singleId)))
      )
        .then((res) => {
          getProducts();
        })
        .catch((err) => {
          console.log("Error while deleting items:", err);
        });
    } else {
      // Delete a single item as in the original function
      api
        .delete(ENDPOINTS.PRODUCTS.DEL(id))
        .then((res) => {
          console.log(res);
          getProducts();
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
        // links={{ add: "/addCustomer", edit: "/editCustomer" }}
        title={"Removed Products"}
        // filters={{key:"role", states:["admin", "customer"]}}

        data={products}
        columns={[
          {
            key: "name",
            header: "Product Name",
          },
          {
            key: "price",
            header: "Price",
          },
          {
            key: "description",
            header: "Description",
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

export default RemovedProductsTable;