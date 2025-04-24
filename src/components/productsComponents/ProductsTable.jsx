import { useState, useEffect } from "react";
import GenericTable from "../common/genericTable/GenericTable";
import { api } from "../../utils/api/api.js";
import { ENDPOINTS } from "../../utils/api/endPoints.js";
function ProductsTable(props) {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    api.get(ENDPOINTS.PRODUCTS.GET).then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const handleDelete = (id) => {
    if (Array.isArray(id)) {
      // Delete multiple items if `id` is an array
      Promise.all(
        id.map((singleId) => api.delete(ENDPOINTS.PRODUCTS.DEL_SOFT(singleId)))
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
        .delete(ENDPOINTS.PRODUCTS.DEL_SOFT(id))
        .then((res) => {
          console.log(res);
          getProducts();
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  };
  return (
    <>
      <GenericTable
        links={{ add: "/addProduct", edit: "/editProduct" }}
        title={"Products"}
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
      />
    </>
  );
}

export default ProductsTable;
