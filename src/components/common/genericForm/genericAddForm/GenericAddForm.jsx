import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Col, Row } from "react-bootstrap";
import "react-phone-input-2/lib/bootstrap.css";
import {
  BackButton,
  FormContainer,
  SubmitButton,
} from "./genericAddForm.styles";
import renderField from "./renderField";
import { Link } from "react-router-dom";

const DynamicAddForm = ({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  submitText = "Submit",
  backPath,
  resetAfterSubmit = true,
}) => {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape(validationSchema)}
        onSubmit={onSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Row>
              {fields.map((field) => (
                <Col md={field.col || 6} key={field.name}>
                  <div className="mb-3">
                    <label htmlFor={field.name} className="form-label">
                      {field.label}
                      {field.required && (
                        <span className="text-danger"> *</span>
                      )}
                    </label>

                    {renderField(field, errors, touched, setFieldValue)}

                    {errors[field.name] && touched[field.name] && (
                      <div className="invalid-feedback d-block">
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>

            <div className="d-flex justify-content-end">
              <Link to = {backPath}>
                <BackButton className="mr-2">Back</BackButton>
              </Link>
              <SubmitButton type="submit" variant="primary">
                {submitText}
              </SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default DynamicAddForm;
