import { UserForm } from "../types/UserForm";

export const defaultFormValues: UserForm = {
  name: "",
  username: "",
  email: "",
  password: "",
  dateOfBirth: "",
  presentAddress: "",
  permanentAddress: "",
  city: "",
  postalCode: "",
  country: "",
  validations: { email: { message: "" }, password: { message: "" } },
};
