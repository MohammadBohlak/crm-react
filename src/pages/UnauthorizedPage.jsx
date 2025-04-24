import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #dc3545;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
`;

const StyledButton = styled(Button)`
  padding: 10px 25px;
  font-size: 1.1rem;
`;

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>403 - Unauthorized Access</Title>
      <Message>
        You don't have permission to access this page. Please contact your administrator if you believe this is an error.
      </Message>
      <StyledButton 
        variant="primary" 
        onClick={() => navigate(-1)} // العودة للصفحة السابقة
      >
        Go Back
      </StyledButton>
      <StyledButton 
        variant="outline-primary" 
        onClick={() => navigate("/")}
        className="mt-3"
      >
        Go to Home Page
      </StyledButton>
    </Container>
  );
};

export default UnauthorizedPage;