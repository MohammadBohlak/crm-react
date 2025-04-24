import React from "react";
import GenericTable from "../common/genericTable/GenericTable";

function TableInteractions(props) {
    const interactions = [
        {
          _id: "inter1",
          customerName: "cust2",
          type: "call",
          date: "2023-04-02T10:30:00Z",
          notes: "Customer interested in advanced package, needs demo",
          createdAt: "2023-04-02T11:45:00Z"
        },
        {
          _id: "inter2",
          customerName: "cust1",
          type: "meeting",
          date: "2023-04-06T14:00:00Z",
          notes: "Product presentation, customer satisfied with features",
          createdAt: "2023-04-06T15:30:00Z"
        },
        {
          _id: "inter3",
          customerName: "cust3",
          type: "email",
          date: "2023-04-12T09:00:00Z",
          notes: "Sent product catalog to customer",
          createdAt: "2023-04-12T09:05:00Z"
        }
      ];
 
  return (
    <>
      <GenericTable
        links= {{add: "/addInteraction" , edit: "/editInteraction"}}
        title={"Interactions"}
        data={interactions}
        filters={{key: "type", states: ["email", "meeting", "call"]}}
        noEdit= {true}
        noAdd= {true}
        columns={[
          {
            key: "customerName",
            header: "Customer Name",
            render: (item) => <strong>{item.customerName}</strong>,
          },
          {
            key: "type",
            header: "Type",
          },
          {
            key: "notes",
            header: "Notes",
          },
        ]}
        identifier="_id"
        onDelete={(ids) => console.log("Delete items:", ids)}
        onBulkDelete={(ids) => console.log("Bulk delete:", ids)}
        onEdit={(item) => console.log("Edit item:", item)}
      />
    </>
  );
}

export default TableInteractions;
