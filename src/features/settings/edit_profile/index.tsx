import React, { useEffect, useState } from "react";
import { useToast } from "../../../context";
import { fetchUserData } from "../../../services/api";
import { validateFormFields } from "../../../utils";
import ProfilePicture from "./form/ProfilePicture";
import ProfileForm from "./form/ProfileForm";
import SaveButton from "./SaveButton";
import { defaultFormValues } from "../../../constants";
import { UserData } from "../../../types/UserData";
import { UserForm } from "../../../types/UserForm";
import { ToastType } from "../../../types/enums";
import "./EditProfile.scss";

const EditProfileForm: React.FC = () => {
  const { showToast } = useToast();
  const [formValues, setFormValues] = useState<UserForm>(defaultFormValues);
  const [originalValues, setOriginalValues] = useState<UserForm | null>(null);
  const [isProfilePhotoUpdated, setIsProfilePhotoUpdated] =
    useState<boolean>(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const validatedFormValues = validateFormFields({
      ...formValues,
      [name]: value,
    });
    setFormValues(validatedFormValues);
  };

  const handleProfilePictureChange = (file: File) => {
    if (file) {
      setIsProfilePhotoUpdated(true);
    }
  };

  const handleSave = () => {
    showToast({
      message: "Successfully saved!",
      type: ToastType.Success,
    });
    setOriginalValues(formValues);
  };

  const isFormModified =
    originalValues &&
    JSON.stringify(formValues) !== JSON.stringify(originalValues);

  const hasValidationErrors = Object.keys(formValues.validations).length > 0;

  const saveButtonDisabledState = !(
    (isFormModified && !hasValidationErrors) ||
    isProfilePhotoUpdated
  );

  useEffect(() => {
    const getUserData = async () => {
      const data: UserData = await fetchUserData();
      const modifiedData: UserForm = {
        ...data,
        validations: {},
      };

      setFormValues(modifiedData);
      setOriginalValues(modifiedData);
    };

    getUserData();
  }, []);

  if (!originalValues?.name) {
    return null;
  }

  return (
    <>
      <div className="edit-profile flex flex-col lg:gap-12 lg:flex-row lg:items-start">
        <ProfilePicture onProfilePictureChange={handleProfilePictureChange} />
        <ProfileForm
          formValues={formValues}
          onInputChange={handleInputChange}
        />
      </div>
      <SaveButton disabled={saveButtonDisabledState} onSave={handleSave} />
    </>
  );
};

export default EditProfileForm;
