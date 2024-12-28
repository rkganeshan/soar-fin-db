// Standard email: <nums-chars>@<nums,chars>.<domain=chars>
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 8 characters length, atleast one Upper Case char and special charatcer
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Mask card number regex
const maskCardNumberRegex = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;

export { emailRegex, passwordRegex, maskCardNumberRegex };
