import React, { useState, useEffect } from "react";
import { Table, Form, InputGroup } from "react-bootstrap";
import {
  ActionButton,
  ControlsContainer,
  TableContainer,
  TableTitle,
} from "./genericTable.styles";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import ModalConfermed from "../modalConfirmed/ModalConfermed";
import { MdRestore } from "react-icons/md";
import { useSelector } from "react-redux";

const GenericTable = ({
  title,
  data,
  columns,
  filters,
  onDelete,
  onEdit,
  onBulkDelete,
  identifier = "id",
  links,
  noAdd,
  noEdit,
  handleRestore,
  Restore,
  noActions
}) => {
  const user = useSelector((state) => state.user.user);
  const isAdmin = user.role == "admin";

  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const [bulkDeleteModalShow, setBulkDeleteModalShow] = useState(false);
  const [singleDeleteModalShow, setSingleDeleteModalShow] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null); // لتخزين الصف المراد حذفه فرديًا

  useEffect(() => {
    const filtered = data.filter((row) => {
      const matchesSearch = columns.some((col) => {
        const value = row[col.key];
        return value
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      const matchesStatus =
        statusFilter === "all" || row[filters.key] === statusFilter;

      return matchesSearch && matchesStatus;
    });
    setFilteredData(filtered);
  }, [data, searchTerm, statusFilter, columns]);

  useEffect(() => {
    setSelectedRows([]);
  }, [data]);

  const handleSelectRow = (rowId) => {
    setSelectedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredData.map((row) => row[identifier]));
    }
  };

  const handleBulkDelete = () => {
    if (selectedRows.length > 0) {
      onBulkDelete(selectedRows);
      setSelectedRows([]);
    }
    setBulkDeleteModalShow(false); // إغلاق الـ Modal بعد الحذف
  };

  return (
    <TableContainer>
      <TableTitle>{title}</TableTitle>
      <ControlsContainer>
        <InputGroup style={{ maxWidth: "300px" }}>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
        {filters && (
          <Form.Select
            style={{ width: "200px" }}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            {filters.states.map((filter, index) => (
              <option key={index} value={filter}>
                {filter}
              </option>
            ))}
          </Form.Select>
        )}
      </ControlsContainer>

      {isAdmin && (
        <ControlsContainer>
          {!noAdd && (
            <Link to={links.add}>
              <ActionButton
                variant="primary"
                style={{ gap: "10px", margin: "0" }}
                // onClick={handleBulkDelete}
              >
                Add
                <IoMdAddCircleOutline />
              </ActionButton>
            </Link>
          )}
          <ActionButton
            style={{ scale: `${selectedRows.length > 0 ? "1" : "0"}` }}
            variant="danger"
            onClick={() => setBulkDeleteModalShow(true)}
          >
            Delete Selected ({selectedRows.length})
          </ActionButton>
          <ModalConfermed
            show={bulkDeleteModalShow}
            onHide={() => setBulkDeleteModalShow(false)}
            onConfirm={handleBulkDelete}
          />
        </ControlsContainer>
      )}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {isAdmin && !noActions &&(
              <th>
                <Form.Check
                  type="checkbox"
                  checked={
                    selectedRows.length === filteredData.length &&
                    filteredData.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
            )}

            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
           {
            isAdmin && !noActions &&  <th>Actions</th>
           }
          </tr>
        </thead>

        <tbody>
          {filteredData.map((row) => (
            <tr
              key={row[identifier]}
              className={
                selectedRows.includes(row[identifier]) ? "selected" : ""
              }
            >
              {isAdmin && !noActions && (
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={selectedRows.includes(row[identifier])}
                    onChange={() => handleSelectRow(row[identifier])}
                  />
                </td>
              )}

              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}

             {
              isAdmin && !noActions && (
                <td style={{ display: "flex", justifyContent: "center" }}>
                {!noEdit && (
                  <Link to={`${links.edit}/${row._id}`}>
                    <ActionButton variant="success" onClick={() => onEdit(row)}>
                      <FaRegEdit />
                    </ActionButton>
                  </Link>
                )}
                {Restore && (
                  <ActionButton
                    variant="primary"
                    onClick={() => handleRestore(row[identifier])}
                  >
                    <MdRestore />
                  </ActionButton>
                )}
                <ActionButton
                  variant="danger"
                  onClick={() => {
                    setRowToDelete(row[identifier]); // حفظ معرف الصف المراد حذفه
                    setSingleDeleteModalShow(true);
                  }}
                >
                  <RiDeleteBin6Line />
                </ActionButton>

                <ModalConfermed
                  show={singleDeleteModalShow}
                  onHide={() => {
                    setSingleDeleteModalShow(false);
                    setRowToDelete(null);
                  }}
                  onConfirm={() => {
                    onDelete(rowToDelete); // استخدام المعرف المحفوظ
                    setSingleDeleteModalShow(false);
                    setRowToDelete(null);
                  }}
                />
              </td>
              )
             }
            </tr>
          ))}
        </tbody>
      </Table>

      {filteredData.length === 0 && (
        <div className="text-center p-4">No records found</div>
      )}
    </TableContainer>
  );
};

export default GenericTable;
