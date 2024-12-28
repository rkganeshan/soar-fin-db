import React, { useRef } from "react";
import { useToast } from "../../../../context";
import { useSettingsContext } from "../../../../context/settingsContext";
import LazyImage from "../../../../ui/LazyImage";
import {
  getBase64FromFile,
  handleImageUpload,
} from "../../../../utils/profileImageUpload";
import { ToastType } from "../../../../types/enums";
import CurrentUser from "../../../../assets/currentUser.svg";
import EditIcon from "../../../../assets/pencil.svg?react";

const ProfilePicture = () => {
  const { previewUrl, setPreviewUrl, setIsProfilePhotoUpdated } =
    useSettingsContext();
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      try {
        const base64Url = await getBase64FromFile(file);
        setPreviewUrl(base64Url as string);

        const success = handleImageUpload(
          file,
          (file: File) => file && setIsProfilePhotoUpdated(true)
        );
        if (success) {
          showToast({
            message: "Profile picture added. Click 'Save' to apply changes.",
            type: ToastType.Warning,
          });
        }
      } catch (error) {
        showToast({
          message: "Failed to update profile picture.",
          type: ToastType.Error,
        });
      }
    }
  };

  return (
    <div className="profile-picture relative mb-6 lg:mb-0 lg:pl-5">
      <div className="profile-box">
        <LazyImage
          image={{
            alt: "Profile",
            src: previewUrl || CurrentUser,
            className: "profile-img rounded-full relative",
            transitionDelay: "1s",
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <button
          className="edit-btn absolute bottom-0 right-0"
          onClick={handleEditClick}
        >
          <EditIcon className="edit-icon w-8 h-8 md:w-6 md:h-6 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default ProfilePicture;
