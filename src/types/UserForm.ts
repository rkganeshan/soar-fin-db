import { FormFieldDataType } from "./enums/FormFieldInput";
import { UserData } from "./UserData";

export interface UserFormValidations {
  email?: { message: string };
  password?: { message: string };
  name?: { message: string };
  username?: { message: string };
  dateOfBirth?: { message: string };
  presentAddress?: { message: string };
  permanentAddress?: { message: string };
  city?: { message: string };
  postalCode?: { message: string };
  country?: { message: string };
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
