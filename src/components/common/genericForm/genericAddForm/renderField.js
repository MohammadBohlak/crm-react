import { Field } from "formik";
import { StyledReactPhoneInput } from "./genericAddForm.styles";

// دالة مساعدة لعرض أنواع الحقول المختلفة
const renderField = (field, errors, touched, setFieldValue) => {
  switch (field.type) {
    case "select":
      return (
        <Field
          as="select"
          name={field.name}
          className={`form-select ${
            errors[field.name] && touched[field.name] ? "is-invalid" : ""
          }`}
        >
          <option value="">{field.placeholder || "Select..."}</option>
          {field.options?.map((option, index) => (
            <option key={`${option.value}${index}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      );

    case "phone":
      return (
          <StyledReactPhoneInput
            inputClass={`form-control ${
              errors[field.name] && touched[field.name] ? "is-invalid" : ""
            }`}
            country={"sy"}
            enableSearch
            onChange={(value) => setFieldValue(field.name, value)}
            inputProps={{
              name: field.name,
              required: field.required,
            }}
          />
      );

    case "textarea":
      return (
        <Field
          as="textarea"
          name={field.name}
          rows={field.rows || 3}
          placeholder={field.placeholder}
          className={`form-control ${
            errors[field.name] && touched[field.name] ? "is-invalid" : ""
          }`}
        />
      );

    default:
      return (
        <Field
          type={field.type || "text"}
          name={field.name}
          placeholder={field.placeholder}
          className={`form-control ${
            errors[field.name] && touched[field.name] ? "is-invalid" : ""
          }`}
        />
      );
  }
};

export default renderField;
