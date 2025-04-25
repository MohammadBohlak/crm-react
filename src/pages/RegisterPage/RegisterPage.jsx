import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import renderField from "../../components/common/genericForm/genericAddForm/renderField";
import {
  ErrorText,
  FormSection,
  FormWrapper,
  InputGroup,
  Label,
  StyledLink,
  SubmitButton,
  RegisterContainer,
  WelcomeSection,
} from "./registerPage.styles";
import { initialValues, registerFields, registerSchema } from "./registerLogic";
import { useState } from "react";
import { ENDPOINTS } from "../../utils/api/endPoints";
import { api } from "../../utils/api/api";
import CustomToast from "../../components/common/customToast/CustomToast";
import { login } from "../../store/slices/userSlice";

const RegisterPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastIsError, setToastIsError] = useState(true);
  const [toastTitle, setToastTitle] = useState("");

    const dispatch = useDispatch();
    
  
  const handleSubmit = (values) => {
    // Filter out status and company if role is not customer
    const payload = values.role === 'customer' 
      ? values 
      : (({ status, company, ...rest }) => rest)(values);

    api.post(ENDPOINTS.AUTH.REGISTER, payload)
      .then((res) => {
        setToastIsError(false);
        setShowToast(true);
        setToastMessage("The register was successful"); 
        setToastTitle("Success");
        const userData = res.data;
        console.log(res.data)
         dispatch(login({
                  id: userData._id,    // من الخادم
                  email: userData.email,
                  role: userData.role
                })); 
      })
      .catch(err => {
        setToastIsError(true);
        const errorMessage = err.response?.data?.error || "An unexpected error occurred";
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
          <h1>Create an Account! 🚀</h1>
          <p>Join our CRM system to start managing your business</p>
        </WelcomeSection>

        <FormSection>
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleSubmit, setFieldValue, values }) => (
              <FormWrapper onSubmit={handleSubmit}>
                {registerFields.map((field) => {
                  // Hide status and company fields if role is not customer
                  if (values.role !== 'customer' && (field.name === 'status' || field.name === 'company')) {
                    return null;
                  }

                  return (
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
                  );
                })}

                <SubmitButton type="submit">Create Account</SubmitButton>

                <StyledLink>
                  Already have an account? <Link to="/login">Login</Link>
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

export default RegisterPage;
