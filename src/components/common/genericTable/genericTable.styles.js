import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 20px 0;
  border-radius: 8px;
  /* transition: margin-top 0.3s ease-in-out; */
  /* transition: all 0.3s; */
 /* 
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  overflow: hidden; */
    input:focus,
    select:focus{
        box-shadow: none;
        border-color: ${({theme}) => theme.colors.primary};
    }
    input[type="checkbox"]{
        border: 1px solid blue ; 
        width: 15px  ; 
        height: 15px;
    }
  th,
  td {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    vertical-align: middle;
    padding: 8px;
    border: 1px solid  ${({ theme }) => theme.colors.border} ;
    white-space: nowrap;
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
      padding: 5px;
    }
  }
`;

export const TableTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text} ; 
  font-size: 2rem ; 
  margin: 20px 0 ;
  font-weight: bold;
`

export const ControlsContainer = styled.div`
  /* padding: 15px 0 ; */
  margin-bottom: 15px;
  /* background:  ${({theme}) => theme.colors.textMuted} ; */
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const ActionButton = styled(Button)`
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 1rem;
  transition: scale 0.3s;
  display: flex ;
  justify-content: space-between;
  align-items: center;
  /* background-color: ; */
  svg{
    /* font-size: 1rem; */
    font-size: 1.5rem !important;
  }
`;