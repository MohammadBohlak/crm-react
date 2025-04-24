import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: white ; 
  background: ${({theme}) => theme.colors.textMuted};
  transition: all 0.3s;
  font-weight: bold;
  &.active {
    background: ${({theme}) => theme.colors.primary} ;
    color: white ;
  }
  &:hover{
  }
  &:hover:not(.active) {
    transform: translateY(-5px);
    opacity: .9 
     }
`;