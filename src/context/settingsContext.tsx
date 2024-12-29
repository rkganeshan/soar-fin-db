import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetchData } from "../hooks/useFetchData";
import { validateFormFields } from "../utils";
import { useGlobalContext, useToast } from ".";
import { UserData } from "../types/UserData";
import { UserForm } from "../types/UserForm";
import { SettingsTab, ToastType } from "../types/enums";
import { defaultFormValues } from "../constants";
import { API_ROUTES } from "../constants/apiRoutes";

interface SettingsContextType {
  activeTab: SettingsTab;
  setActiveTab: React.Dispatch<SetStateAction<SettingsTab>>;
  previewUrl: string | null;
  setPreviewUrl: React.Dispatch<SetStateAction<string | null>>;
  formValues: UserForm;
  setFormValues: React.Dispatch<SetStateAction<UserForm>>;
  originalValues: UserForm | null;
  setOriginalValues: React.Dispatch<SetStateAction<UserForm | null>>;
  isProfilePhotoUpdated: boolean;
  setIsProfilePhotoUpdated: React.Dispatch<SetStateAction<boolean>>;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onEditProfileFormSave: () => void;
  isEditProfileSaveBtnDisabled: boolean;
  isLoadingUserInfo: boolean;
  isErrorUserInfo: boolean;
}
const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsProvider"
    );
  }
  return context;
};

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { showToast } = useToast();
  const { setCurrentUserUpdatedImg } = useGlobalContext();
  const [activeTab, setActiveTab] = useState<SettingsTab>(
    SettingsTab.EditProfile
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<UserForm>(defaultFormValues);
  const [originalValues, setOriginalValues] = useState<UserForm | null>(null);
  const [isProfilePhotoUpdated, setIsProfilePhotoUpdated] =
    useState<boolean>(false);

  const {
    isFetching: isLoadingUserInfo,
    isError: isErrorUserInfo,
    data,
  } = useFetchData<UserData>(API_ROUTES.getUserProfile);

  const isFormModified =
    originalValues &&
    JSON.stringify(formValues) !== JSON.stringify(originalValues);

  const hasValidationErrors = Object.keys(formValues.validations).length > 0;

  const isEditProfileSaveBtnDisabled = !(
    (isFormModified && !hasValidationErrors) ||
    isProfilePhotoUpdated
  );

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

  const handleSaveEditProfileForm = () => {
    setCurrentUserUpdatedImg(previewUrl);
    showToast({
      message: "Successfully saved!",
      type: ToastType.Success,
    });
    setOriginalValues(formValues);
    setIsProfilePhotoUpdated(false);
    setPreviewUrl(null);
  };

  useEffect(() => {
    if (data) {
      const modifiedData: UserForm = {
        ...data,
        validations: {},
      };
      setFormValues(modifiedData);
      setOriginalValues(modifiedData);
    }
  }, [data]);

  return (
    <SettingsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        previewUrl,
        setPreviewUrl,
        formValues,
        setFormValues,
        originalValues,
        setOriginalValues,
        isProfilePhotoUpdated,
        setIsProfilePhotoUpdated,
        onInputChange: handleInputChange,
        onEditProfileFormSave: handleSaveEditProfileForm,
        isEditProfileSaveBtnDisabled,
        isLoadingUserInfo,
        isErrorUserInfo,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
