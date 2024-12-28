import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: any;
  type?: string;
  helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  helperText,
}) => {
  return (
    <div>
      <label className="block mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`w-full p-2 pl-3 border rounded-2xl ${
          helperText
            ? "border-red-500 active:border-red-500"
            : "border-gray-300 active:border-gray-400"
        } `}
        value={value}
        onChange={onChange}
        spellCheck="false"
        aria-describedby={helperText ? `${name}-helper-text` : undefined}
        aria-invalid={helperText ? "true" : undefined}
      />
      {helperText && (
        <span id={`${name}-helper-text`} className="text-red-500 text-sm mt-1">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default InputField;
