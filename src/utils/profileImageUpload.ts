export const getBase64FromFile = async (file: File) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const handleImageUpload = (
  file: File,
  onUpload: (file: File) => void
) => {
  try {
    onUpload(file);
    return true;
  } catch (error) {
    throw new Error("Failed to upload image");
  }
};
