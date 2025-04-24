import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

// مكون الحاوية المخصصة للوحة باستخدام styled-components
export const StyledTopPerformers = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};

  .show {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 30px;
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
  
`;

// بطاقة أداء كل مستخدم
export const PerformerCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.primary};
`;

// منطقة تفاصيل المشارك
export const PerformerDetails = styled.div`
  flex: 1;
`;

// اسم المشارك بتنسيق عريض
export const PerformerName = styled.h5`
  font-weight: bold;
  margin: 0;
  color: white;
`;

// الأرباح والتفاصيل الفرعية
export const Earnings = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: white;
`;

// رقم الترتيب
export const Rank = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-right: 1rem;
`;

// تخصيص شريط التقدم باستخدام react-bootstrap ProgressBar
export const StyledProgressBar = styled(ProgressBar)`
  height: 8px;
  margin-top: 0.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  .progress-bar {
    background-color: ${({ theme }) => theme.colors.success};
}

`;
