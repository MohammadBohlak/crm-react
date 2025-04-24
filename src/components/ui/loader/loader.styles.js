import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  pointer-events: none;
`;

export const Spinner = styled.div`
  border: 5px solid ${({theme}) => theme.colors.textMuted};
  border-top: 6px solid transparent;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;