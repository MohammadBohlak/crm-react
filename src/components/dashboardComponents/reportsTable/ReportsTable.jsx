import React from "react";
import GenericTable from "../../common/genericTable/GenericTable";

const ReportTable = ({ data }) => {
  return (
    <>
      <GenericTable
        noAdd={true}
        noEdit={true}
        noActions={true}
        title={"Reports"}
        data={data}
        columns={[
          {
            key: "contractCode",
            header: "Contract-Code",
          },
          {
            key: "salePerson",
            header: "Sale Person",
          },
          {
            key: "amount",
            header: "Amount",
          },
          {
            key: "tax",
            header: "Tax",
          },
          {
            key: "total",
            header: "Total",
          },
        ]}
        identifier="_id"
        onDelete={(ids) => console.log("Delete items:", ids)}
        onBulkDelete={(ids) => console.log("Bulk delete:", ids)}
        onEdit={(item) => console.log("Edit item:", item)}
      />
    </>
  );
};

export default ReportTable;
