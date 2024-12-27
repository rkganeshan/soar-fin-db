// Standard email: <nums-chars>@<nums,chars>.<domain=chars>
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 8 characters length, atleast one Upper Case char and special charatcer
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export { emailRegex, passwordRegex };
