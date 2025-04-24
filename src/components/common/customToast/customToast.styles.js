import { Toast } from "react-bootstrap";
import styled from "styled-components";

export const StyledToast = styled(Toast)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 100%;
  width: fit-content;
  color: ${({ $isError, theme }) =>  $isError? theme.colors.error : theme.colors.success };
  border: 1px solid ${({ $isError, theme }) =>  $isError? theme.colors.error : theme.colors.success };
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  font-weight: bold;
  .toast-header {
    background-color: ${({ $isError, theme }) =>  $isError? theme.colors.error : theme.colors.success };
    color: white;
    border-bottom: none;
  }
 
  .toast-body {
    padding: 15px;
  }
`;

export const ToastIcon = styled.span`
  margin-right: 10px;
  font-size: 1.2rem;
`;
