import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const FormContainer = styled.div`
  padding: 20px;
  /* background: #f8f9fa; */
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
`;

const ActionButton = styled(Button)`
  min-width: 120px;
  margin: 8px;
`;

const GenericEditForm = ({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  onCancel,
  submitText = 'Save Changes',
  cancelText = 'Cancel'
}) => {
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape(validationSchema)}
        onSubmit={(values) => onSubmit(values)}
        enableReinitialize
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Row>
              {fields.map((field) => (
                <Col md={field.col || 6} key={field.name}>
                  <FormField
                    field={field}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    initialValues= {initialValues}
                  />
                </Col>
              ))}
            </Row>

            <div className="d-flex justify-content-end mt-4">
              <ActionButton variant="secondary" onClick={onCancel}>
                {cancelText}
              </ActionButton>
              <ActionButton type="submit" variant="primary">
                {submitText}
              </ActionButton>
            </div>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

const FormField = ({ field, errors, touched, setFieldValue, initialValues }) => {
  const commonProps = {
    name: field.name,
    className: `form-control ${errors[field.name] && touched[field.name] ? 'is-invalid' : ''}`,
    placeholder: field.placeholder,
    required: field.required
  };

  return (
    <div className="mb-3">
      <label htmlFor={field.name} className="form-label">
        {field.label}
        {field.required && <span className="text-danger"> *</span>}
      </label>

      {(() => {
        switch (field.type) {
          case 'select':
            return (
              <Field as="select" {...commonProps}>
                <option value="">{field.placeholder || 'Select...'}</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
            );

          case 'phone':
            return (
              <ReactPhoneInput
                inputClass={commonProps.className}
                country={'sy'}
                enableSearch
                value={initialValues[field.name]}
                onChange={(value) => setFieldValue(field.name, value)}
                inputProps={{
                  name: field.name,
                  required: field.required
                }}
              />
            );

          case 'textarea':
            return <Field as="textarea" rows={4} {...commonProps} />;

          case 'number':
            return <Field type="number" step={field.step} {...commonProps} />;

          case 'date':
            return <Field type="date" {...commonProps} />;

          case 'checkbox':
            return (
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id={field.name}
                />
                <label className="form-check-label" htmlFor={field.name}>
                  {field.label}
                </label>
              </div>
            );

          default:
            return <Field type={field.type || 'text'} {...commonProps} />;
        }
      })()}

      {errors[field.name] && touched[field.name] && (
        <div className="invalid-feedback d-block">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default GenericEditForm;