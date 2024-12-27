import { FormFieldDataType } from "./enums/FormFieldInput";
import { UserData } from "./UserData";

export interface UserFormValidations {
  email: { message: string };
  password: { message: string };
}

export interface UserForm extends UserData {
  validations: UserFormValidations;
}

export interface FormFields {
  label: string;
  name: keyof UserForm;
  type?: string;
  fieldType?: FormFieldDataType;
}
