import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const StyledTable = styled(Table)`
  margin: 20px 0;
  /* max-width: 100%; */
  font-size: 1.2rem;
  overflow-x: scroll;
  thead,
  tbody {
  }
  th,
  td {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    vertical-align: middle;
    padding: 8px;
    border: 1px solid  ${({ theme }) => theme.colors.border} ;
  }

  tr:nth-child(1) th {
    background-color: ${({ theme }) => theme.colors.background};
  }
  tr:nth-child(even) td {
    background-color: ${({ theme }) => theme.colors.background};
  }
  tr:nth-child(odd) td {
    /* background-color: ${({ theme }) => theme.colors.textMuted}; */
    background-color:  ${({ theme }) => theme.colors.primary };

    color: white;
  }

  svg {
    font-size: 1rem;
  }
  tr{
    position: relative;
  }
  
  tr::after{
  transition: all .3s;
  content: "";
  top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position:absolute;
    background-color: blue ;
    pointer-events: none;
    opacity: 0;
  }
  tr.selected::after{
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    th,
    td {
      padding: 0px;
    }
  }
`;
const TableTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text} ; 
  font-size: 2rem ; 
  margin: 20px 0 ;
  font-weight: bold;
`
const ReportTable = ({ data }) => {
  const [reports, setReports] = useState(data);
  const [selectedReports, setSelectedReports] = useState([]);

  const handleSelectReport = (contractCode) => {
    if (selectedReports.includes(contractCode)) {
      setSelectedReports(
        selectedReports.filter((code) => code !== contractCode)
      );
    } else {
      setSelectedReports([...selectedReports, contractCode]);
    }
  };

  const handleDelete = (contractCode) => {
    setReports(
      reports.filter((report) => report.contractCode !== contractCode)
    );
    setSelectedReports(selectedReports.filter((code) => code !== contractCode));
  };

  const handleDeleteSelected = () => {
    setReports(
      reports.filter((report) => !selectedReports.includes(report.contractCode))
    );
    setSelectedReports([]);
  };
  return (
    <div className="" style={{width: "99%", overflowX: "auto"}}>
      <TableTitle>
        Reports
      </TableTitle>
      <StyledTable style={{width: "99%", overflowX: "auto"}}>
        <thead>
          <tr>
            <th></th>
            <th>Contract Code</th>
            <th>Order Date</th>
            <th>Sales Person</th>
            <th>Amount</th>
            <th>Tax</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((report) => (
            <tr key={report.contractCode}
            className={selectedReports.includes(report.contractCode)? "selected" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedReports.includes(report.contractCode)}
                  onChange={() => handleSelectReport(report.contractCode)}
                />
              </td>
              <td>{report.contractCode}</td>
              <td>{new Date(report.orderDate).toLocaleDateString()}</td>
              <td>{report.salePerson}</td>
              <td>{report.amount}</td>
              <td>{report.tax}</td>
              <td>{report.total}</td>
              <td>
                <Button variant="success">
                  <FaRegEdit />
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(report.contractCode)}
                >
                  <RiDeleteBin6Line />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {selectedReports.length > 0 && (
        <Button variant="danger" onClick={handleDeleteSelected}>
          Delete Selected
        </Button>
      )}
    
    </div>
  );
};

export default ReportTable;
