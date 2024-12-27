import { useSettingsContext } from "../../../context/settingsContext";

const SaveButton = () => {
  const { isEditProfileSaveBtnDisabled, onEditProfileFormSave } =
    useSettingsContext();
  return (
    <div className="save-container flex justify-end">
      <button
        disabled={isEditProfileSaveBtnDisabled}
        className="save-btn mt-6 px-4 py-2 bg-black text-white rounded-2xl"
        onClick={onEditProfileFormSave}
      >
        Save
      </button>
    </div>
  );
};

export default SaveButton;
