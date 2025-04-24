import styled from "styled-components";

export const StyledThemeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid transparent;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  svg {
    font-size: 1.8rem;
  }
`;
