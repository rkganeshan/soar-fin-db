import { emailRegex, passwordRegex } from "./regex";
import { validateField, validateFormFields } from "./userForm";
import { routerPath } from "../constants";

const getPageTitleByPathName = (pathName: string): string => {
  const routeEntry = Object.values(routerPath).find(
    (item) => item.ROUTE === pathName
  );
  return routeEntry?.TITLE || "Page Not Found";
};

export {
  emailRegex,
  passwordRegex,
  getPageTitleByPathName,
  validateField,
  validateFormFields,
};
