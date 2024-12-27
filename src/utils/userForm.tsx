import { emailRegex, passwordRegex } from "./regex";
import {
  FormFieldDataType,
  FormValidationKeys,
} from "../types/enums/FormFieldInput";
import { FormFields, UserForm, UserFormValidations } from "../types/UserForm";

const fields: FormFields[] = [
  { label: "Your Name", name: "name" },
  { label: "User Name", name: "username" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    fieldType: FormFieldDataType.DatePicker,
  },
  { label: "Present Address", name: "presentAddress" },
  { label: "Permanent Address", name: "permanentAddress" },
  { label: "City", name: "city" },
  { label: "Postal Code", name: "postalCode" },
  { label: "Country", name: "country" },
];

const getUserFormFields = () => {
  return fields;
};

const getLabelForFormField = (name: string) => {
  const field = fields.find((field) => field.name === name);
  return field?.label;
};

// Extra validations for Email and Password
const validateField = (name: string, value: string) => {
  let message = "";
  if (name === FormValidationKeys.Email) {
    if (!emailRegex.test(value)) {
      message = "Please enter a valid email address.";
    }
    return message;
  } else if (name === FormValidationKeys.Password) {
    if (!passwordRegex.test(value)) {
      message = "Min 8 chars, 1 uppercase, 1 special, 1 digit.";
    }
    return message;
  }
};

const validateFormFields = (formData: UserForm): UserForm => {
  const requiredFields = getUserFormFields().map((field) => field.name);
  const { validations } = formData;

  for (const field of requiredFields) {
    const value = formData[field];
    // 1. Check for email and password fields against regex validation
    if (
      (value && field == FormValidationKeys.Email) ||
      field == FormValidationKeys.Password
    ) {
      const message = validateField(
        field,
        formData[field as keyof UserFormValidations]
      );
      if (message)
        validations[field as keyof UserFormValidations] = {
          message: message ?? "",
        };
      else {
        delete validations[field as keyof UserFormValidations];
      }
    }
    // 2. Check for an empty field validation
    else if (!value) {
      validations[field as keyof UserFormValidations] = {
        message: `${getLabelForFormField(field)} is a required field`,
      };
    }
    // 3. If the field is valid and has entry in validations object, then discard the field.
    else {
      delete validations[field as keyof UserFormValidations];
    }
  }

  return formData;
};

export { getUserFormFields, validateField, validateFormFields };
