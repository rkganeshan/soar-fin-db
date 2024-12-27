import { useSettingsContext } from "../../../context/settingsContext";
import ProfilePicture from "./form/ProfilePicture";
import ProfileForm from "./form/ProfileForm";
import SaveButton from "./SaveButton";
import "./EditProfile.scss";

const EditProfileForm = () => {
  const { originalValues } = useSettingsContext();

  if (!originalValues?.name) {
    return null;
  }

  return (
    <>
      <div className="edit-profile flex flex-col lg:gap-12 lg:flex-row lg:items-start">
        <ProfilePicture />
        <ProfileForm />
      </div>
      <SaveButton />
    </>
  );
};

export default EditProfileForm;
