import { useSettingsContext } from "../../../context/settingsContext";
import ProfilePicture from "./form/ProfilePicture";
import ProfileForm from "./form/ProfileForm";
import Alert from "../../../ui/Alert";
import Spinner from "../../../ui/Spinner";
import SaveButton from "./SaveButton";
import "./EditProfile.scss";

const EditProfileForm = () => {
  const { originalValues, isLoadingUserInfo, isErrorUserInfo } =
    useSettingsContext();

  if (isLoadingUserInfo) {
    return (
      <Spinner
        loaderText="Retrieving your profile..."
        aria-label="Loading Spinner"
      />
    );
  }

  if (isErrorUserInfo) {
    return (
      <Alert
        message="Failed to retrieve your profile at the moment."
        type="error"
        aria-live="polite"
        aria-label="Error Alert"
      />
    );
  }

  if (!originalValues?.name) {
    return null;
  }

  return (
    <>
      <div
        className="edit-profile flex flex-col lg:gap-12 lg:flex-row lg:items-start"
        aria-live="polite"
        aria-label="Edit Profile Form"
      >
        <ProfilePicture />
        <ProfileForm />
      </div>
      <SaveButton aria-label="Save Changes Button" />
    </>
  );
};

export default EditProfileForm;
