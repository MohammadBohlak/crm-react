import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Container, Header, StyledNavLink } from "./deletedDataPage.styles";

const DeletedDataPage = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);
  return (
    <>
      <Container>
        <Header>
          <StyledNavLink ref={buttonRef} to="users">
            users
          </StyledNavLink>
          <StyledNavLink to="products">products</StyledNavLink>
          <StyledNavLink to="sales">sales</StyledNavLink>
        </Header>
      </Container>
        <Outlet />
    </>
  );
};

export default DeletedDataPage;
