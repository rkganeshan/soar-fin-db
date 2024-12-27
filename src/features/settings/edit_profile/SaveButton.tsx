interface SaveButtonProps {
  disabled: boolean;
  onSave: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ disabled, onSave }) => (
  <div className="save-container flex justify-end">
    <button
      disabled={disabled}
      className="save-btn mt-6 px-4 py-2 bg-black text-white rounded-2xl"
      onClick={onSave}
    >
      Save
    </button>
  </div>
);

export default SaveButton;
