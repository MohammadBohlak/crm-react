import styled from "styled-components";

// Styled Components (similar to Login with small adjustments)
export const RegisterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 40%,
    ${({ theme }) => theme.colors.secondary}
  );
  color: white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    text-align: center;
  }
`;

export const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  display: block;
  margin-top: 0.25rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const StyledLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
