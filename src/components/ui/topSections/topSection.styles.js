import { Button, Row } from "react-bootstrap";
import styled from "styled-components";

export const StyledTopSection = styled(Row)`
  background-color: ${({ theme }) => theme.colors.textMuted};
  height: 50px;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  align-items: center;
  padding-right: 20px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.textMuted},
    transparent
  );
`;
export const LogoutButton = styled(Button)`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  padding: 3px 10px 3px 10px;
  height: 35px;
  border: 1px solid transparent;
  transition: all 0.3s;
  font-size: 1.3rem;
  border-radius: 5px;
  margin-left: 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.error};
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.error};
  }

  @media (max-width: 768px){
    width: fit-content;
    height: 30px;
    /* padding: 3px; */
  }

  svg {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
