// src/pages/Login.jsx
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import renderField from "../../components/common/genericForm/genericAddForm/renderField";
import {
  ErrorText,
  FormSection,
  FormWrapper,
  InputGroup,
  Label,
  RegisterContainer,
  WelcomeSection,
  SubmitButton,
  StyledLink,
} from "../RegisterPage/registerPage.styles";
import { loginFields, loginSchema } from "./loginLogic";
import { ENDPOINTS } from "../../utils/api/endPoints";
import { api } from "../../utils/api/api";
import { useState } from "react";
import CustomToast from "../../components/common/customToast/CustomToast";
import { login } from "../../store/slices/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastIsError, setToastIsError] = useState(true);
  const [toastTitle, setToastTitle] = useState("");

  const handleSubmit = (values) => {
    api
      .post(ENDPOINTS.AUTH.LOGIN, { ...values })
      .then((res) => {
        setToastIsError(false);
        setShowToast(true);
        setToastMessage("The login successfully");
        setToastTitle("Success");
        const userData = res.data.userData;
        console.log(user)
        dispatch(login({
          id: userData._id,    // من الخادم
          email: userData.email,
          role: userData.role
        }));
      })
      .catch((err) => {
        setToastIsError(true);
        const errorMessage =
          err.response?.data?.error || "An unexpected error occurred";
        setToastMessage(errorMessage);
        setShowToast(true);
        setToastTitle("Error");
      })
      .finally(() => {
        setTimeout(() => setShowToast(false), 5000);
      });
  };

  return (
    <>
      <RegisterContainer>
        <WelcomeSection>
          <h1>Welcome Back! 👋</h1>
          <p>Enter your credentials to manage your CRM system</p>
        </WelcomeSection>

        <FormSection>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleSubmit, setFieldValue }) => (
              <FormWrapper onSubmit={handleSubmit}>
                {loginFields.map((field) => (
                  <InputGroup key={field.name}>
                    <Label>{field.label}</Label>
                    {renderField(
                      {
                        ...field,
                        className: `form-control ${
                          errors[field.name] && touched[field.name]
                            ? "is-invalid"
                            : ""
                        }`,
                      },
                      errors,
                      touched,
                      setFieldValue
                    )}
                    {errors[field.name] && touched[field.name] && (
                      <ErrorText>{errors[field.name]}</ErrorText>
                    )}
                  </InputGroup>
                ))}

                <SubmitButton type="submit">Login</SubmitButton>

                <StyledLink>
                  Don't have an account? <Link to="/register">Register</Link>
                </StyledLink>
              </FormWrapper>
            )}
          </Formik>
        </FormSection>
      </RegisterContainer>
      {showToast && (
        <CustomToast
          isError={toastIsError}
          toastMessage={toastMessage}
          toastTitle={toastTitle}
        />
      )}
    </>
  );
};


export default LoginPage;
