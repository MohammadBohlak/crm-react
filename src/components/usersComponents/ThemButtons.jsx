// src/components/ExampleComponent.js
import styled from 'styled-components';

const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.body};
  margin: ${({ theme }) => theme.spacing.large};

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExampleComponent = () => {
  return (
    <StyledCard>
      <h2>Example Card</h2>
      <p>This component automatically adapts to the current theme!</p>
    </StyledCard>
  );
};

export default ExampleComponent;