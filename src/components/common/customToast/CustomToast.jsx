import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { StyledToast, ToastIcon } from "./customToast.styles";

function CustomToast({isError, toastMessage, toastTitle }) {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <ToastContainer position="top-end">
          <StyledToast
           show={show}
           onClose={() => setShow(false)} 
           $isError = {isError}
           autohide>
            <Toast.Header>
              <ToastIcon className="bi bi-exclamation-triangle-fill" />
              <strong className="me-auto">{toastTitle}</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </StyledToast>
        </ToastContainer>
      )}
    </>
  );
}

export default CustomToast;
