import { FormFieldDataType } from "../types/enums/FormFieldInput";
import { FormFields } from "../types/UserForm";

const getUserFormFields = () => {
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
  return fields;
};

export { getUserFormFields };
