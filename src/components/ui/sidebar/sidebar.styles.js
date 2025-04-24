import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarPlace = styled.div`
    height: 100vh;
    transition: all 0.3s ease;
    padding: 0 ; 
    margin: 0 ; 
    width: ${props => props.$collapsed? "var(--w-dashboard-collapse)" : "var(--w-dashboard)" };
    @media (max-width: 480px){
  
      width: var(--w-dashboard-collapse) ; 
    }

  `
export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary };
  color: white;
  transition: width 0.3s ease;
  z-index: 1000;
  overflow: hidden;
  width: ${props => props.$collapsed? "var(--w-dashboard-collapse)" : "var(--w-dashboard)" };
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 60px;
`;

export const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
`;

export const ToggleButton = styled(Button)`
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  /* color: rgba(255, 255, 255, 0.7); */
  color: white;
  padding: 1rem;
  margin: 1px 0;
  border-radius: 4px;
  white-space: nowrap;
  transition: all 0.2s;
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    color: white;
    background: rgba(255, 255, 255, 0.2);
  }
  
  /* .nav-link:focus, .nav-link:hover{
    color: white !important
  } */
  .icon {
    margin-right: ${props => props.$collapsed ? '0' : '0.75rem'};
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  
  .label {
    opacity: ${props => props.$collapsed ? '0' : '1'};
    transition: opacity 0.3s ease;
    font-size: 1.7rem;
  }
`;