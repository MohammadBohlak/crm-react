import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  align-items: center;
  row-gap: 10px;
  canvas {
    width: 100px !important;
    height: 100px !important;
  }
  &.kpi {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    gap: 10px;
    @media screen and (max-width: 610px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Card = styled.div`
  border-radius: 8px;
  padding: ${(props) => (props.isKpi ? "10px" : "15px")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: ${({ $isKpi, theme }) =>
    $isKpi ? `4px solid ${theme.colors.primary}` : "none"};
  display: flex;
  border-right: ${({ $isKpi, theme }) =>
    $isKpi ? `4px solid ${theme.colors.primary}` : "none"};
  flex-wrap: wrap;
`;
export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #000;
`;

export const Subtitle = styled.p`
  margin: 4px 0;
  font-size: 12px;
  color: #999;
`;

export const Value = styled.h2`
  margin: 8px 0;
  font-size: 1.5rem;
  color: #000;
`;

export const Change = styled.span`
  color: ${(props) => (props.$trend === "up" ? "#10b981" : "#F44336")};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Subvalue = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: #888;
`;