import { Button } from "react-bootstrap";
import styled from "styled-components";
import ReactPhoneInput from "react-phone-input-2";

export const FormContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0px 5px ${({ theme }) => theme.colors.textMuted} inset;
  margin-bottom: 20px;
  font-size: 1.2rem;
  margin-top: 20px;
  input {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 5px 10px;
    font-size: 1.2rem;
  }
  select {
    font-size: 1.2rem;
  }
  input:focus {
    box-shadow: none !important;
    border-color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const SubmitButton = styled(Button)`
  min-width: 120px;
  margin-top: 10px;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background} !important;
  }
`;
export const BackButton = styled(Button)`
  max-width: 100px;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.textMuted};
  color: ${({ theme }) => theme.colors.text};
  border-color: transparent;
  font-weight: bold;
  &:hover {
    border-color: ${({ theme }) => theme.colors.textMuted};
    color: ${({ theme }) => theme.colors.textMuted};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
export const StyledReactPhoneInput = styled(ReactPhoneInput)`
  input {
    padding: 10px 5px 10px 60px !important;
    width: 100% !important;
  }
  .selected-flag:focus::before {
    box-shadow: none;
  }
  .selected-flag.open::before,
  .selected-flag:focus:before {
    border-color: transparent !important;
    box-shadow: none !important;
  }
`;
