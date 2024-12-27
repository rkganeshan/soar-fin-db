import { emailRegex, passwordRegex } from "./regex";
import { UserFormValidations } from "../types/UserForm";
import { FormValidationKeys } from "../types/enums/FormFieldInput";
import { routerPath } from "../constants";

const getPageTitleByPathName = (pathName: string): string => {
  const routeEntry = Object.values(routerPath).find(
    (item) => item.ROUTE === pathName
  );
  return routeEntry?.TITLE || "Page Not Found";
};

const validateField = (
  validations: UserFormValidations,
  name: string,
  value: string
) => {
  let message = "";
  if (name === FormValidationKeys.Email) {
    if (!emailRegex.test(value)) {
      message = "Please enter a valid email address.";
    }
    validations.email.message = message;
  } else if (name === FormValidationKeys.Password) {
    if (!passwordRegex.test(value)) {
      message = "Min 8 chars, 1 uppercase, 1 special, 1 digit.";
    }
    validations.password.message = message;
  }
  return validations;
};

export { emailRegex, passwordRegex, getPageTitleByPathName, validateField };
