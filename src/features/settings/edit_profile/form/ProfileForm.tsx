import { useSettingsContext } from "../../../../context/settingsContext";
import DatePickerField from "../../../../ui/DatePickerField";
import InputField from "../../../../ui/InputField";
import { getUserFormFields } from "../../../../utils/userForm";
import { FormFields } from "../../../../types/UserForm";
import {
  FormFieldDataType,
  FormValidationKeys,
} from "../../../../types/enums/FormFieldInput";

const ProfileForm = () => {
  const { formValues, onInputChange } = useSettingsContext();
  const fields = getUserFormFields();

  const renderField = (args: FormFields) => {
    const {
      label,
      name,
      fieldType = FormFieldDataType.Input,
      type = "text",
    } = args;
    const commonProps = {
      key: name,
      label,
      name,
      value: formValues[name] as string,
      onChange: onInputChange,
    };

    if (fieldType === FormFieldDataType.DatePicker) {
      return <DatePickerField {...commonProps} />;
    }

    return (
      <InputField
        {...commonProps}
        type={type}
        helperText={formValues.validations[name as FormValidationKeys]?.message}
      />
    );
  };

  return (
    <form className="profile-form grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
      {fields.map((field) => renderField(field))}
    </form>
  );
};

export default ProfileForm;
